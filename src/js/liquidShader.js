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

    float radius = 0.18 + clamp(speed * 0.002, 0.0, 0.15);
    float blob = smoothstep(radius, 0.0, dist);

    vec2 dir = normalize(u_velocity + 0.0001) * clamp(speed * 0.0008, 0.002, 0.02);

    float rDist = distance(st + dir, mouse);
    float gDist = distance(st, mouse);
    float bDist = distance(st - dir, mouse);

    float rBlob = smoothstep(radius * 1.08, 0.0, rDist);
    float gBlob = smoothstep(radius, 0.0, gDist);
    float bBlob = smoothstep(radius * 0.92, 0.0, bDist);

    vec3 orangeColor = vec3(1.0, 0.294, 0.0);
    vec3 crimsonColor = vec3(0.88, 0.02, 0.0);
    vec3 goldColor = vec3(0.83, 0.68, 0.21);

    vec3 col = vec3(0.0);
    col += orangeColor * rBlob * 0.45;
    col += crimsonColor * gBlob * 0.35;
    col += goldColor * bBlob * 0.2;

    float pulse = sin(u_time * 2.0 + dist * 10.0) * 0.05;
    col += orangeColor * pulse * blob;

    float alpha = clamp((rBlob + gBlob + bBlob) * 0.55, 0.0, 0.65);

    gl_FragColor = vec4(col, alpha);
  }
`;

export function initLiquidShader(containerId = 'liquid-cursor-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  let width = window.innerWidth;
  let height = window.innerHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  container.appendChild(renderer.domElement);

  const mouse = { x: width * 0.5, y: height * 0.5, prevX: width * 0.5, prevY: height * 0.5, vx: 0, vy: 0 };

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

  let animationFrameId = null;
  const clock = new THREE.Clock();

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    mouse.vx = (x - mouse.prevX) * 0.6;
    mouse.vy = (y - mouse.prevY) * 0.6;
    mouse.x = x;
    mouse.y = y;
    mouse.prevX = x;
    mouse.prevY = y;
  };

  window.addEventListener('mousemove', handleMouseMove, { passive: true });

  const handleResize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    renderer.setSize(width, height);
    uniforms.u_resolution.value.set(width, height);
  };

  window.addEventListener('resize', handleResize);

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);

    uniforms.u_time.value = clock.getElapsedTime();

    // Lerp mouse
    uniforms.u_mouse.value.x += (mouse.x - uniforms.u_mouse.value.x) * 0.12;
    uniforms.u_mouse.value.y += (mouse.y - uniforms.u_mouse.value.y) * 0.12;

    uniforms.u_velocity.value.x += (mouse.vx - uniforms.u_velocity.value.x) * 0.1;
    uniforms.u_velocity.value.y += (mouse.vy - uniforms.u_velocity.value.y) * 0.1;

    mouse.vx *= 0.92;
    mouse.vy *= 0.92;

    renderer.render(scene, camera);
  };

  animate();

  return {
    destroy: () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    },
  };
}
