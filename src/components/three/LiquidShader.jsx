import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform vec2 u_velocity;
  uniform float u_time;
  varying vec2 vUv;

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse / u_resolution.xy;
    mouse.y = 1.0 - mouse.y;

    float dist = distance(st, mouse);
    float speed = length(u_velocity);

    // Metaball liquid radius expands with cursor speed
    float radius = 0.18 + clamp(speed * 0.002, 0.0, 0.15);
    float blob = smoothstep(radius, 0.0, dist);

    // Chromatic aberration offsets based on velocity
    vec2 dir = normalize(u_velocity + 0.0001) * clamp(speed * 0.0008, 0.002, 0.02);

    float rDist = distance(st + dir, mouse);
    float gDist = distance(st, mouse);
    float bDist = distance(st - dir, mouse);

    float rBlob = smoothstep(radius * 1.08, 0.0, rDist);
    float gBlob = smoothstep(radius, 0.0, gDist);
    float bBlob = smoothstep(radius * 0.92, 0.0, bDist);

    // Orange Dutch Lion palette (#FF4B00) with Red Bull Crimson highlights
    vec3 orangeColor = vec3(1.0, 0.294, 0.0);
    vec3 crimsonColor = vec3(0.88, 0.02, 0.0);
    vec3 goldColor = vec3(0.83, 0.68, 0.21);

    vec3 col = vec3(0.0);
    col += orangeColor * rBlob * 0.45;
    col += crimsonColor * gBlob * 0.35;
    col += goldColor * bBlob * 0.2;

    // Subtle noise pulse
    float pulse = sin(u_time * 2.0 + dist * 10.0) * 0.05;
    col += orangeColor * pulse * blob;

    float alpha = clamp((rBlob + gBlob + bBlob) * 0.55, 0.0, 0.65);

    gl_FragColor = vec4(col, alpha);
  }
`;

export default function LiquidShader() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0, vx: 0, vy: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const uniforms = {
      u_resolution: { value: new THREE.Vector2(width, height) },
      u_mouse: { value: new THREE.Vector2(width * 0.5, height * 0.5) },
      u_velocity: { value: new THREE.Vector2(0, 0) },
      u_time: { value: 0 },
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let isVisible = true;
    let animationFrameId = null;
    const clock = new THREE.Clock();

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const vx = (x - mouseRef.current.prevX) * 0.6;
      const vy = (y - mouseRef.current.prevY) * 0.6;

      mouseRef.current.x = x;
      mouseRef.current.y = y;
      mouseRef.current.vx = vx;
      mouseRef.current.vy = vy;
      mouseRef.current.prevX = x;
      mouseRef.current.prevY = y;
    };

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      uniforms.u_resolution.value.set(width, height);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Pause RAF when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();
      uniforms.u_time.value = elapsed;

      // Smooth mouse damping
      uniforms.u_mouse.value.lerp(new THREE.Vector2(mouseRef.current.x, mouseRef.current.y), 0.12);
      uniforms.u_velocity.value.lerp(new THREE.Vector2(mouseRef.current.vx, mouseRef.current.vy), 0.15);

      // Decay velocity
      mouseRef.current.vx *= 0.88;
      mouseRef.current.vy *= 0.88;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
