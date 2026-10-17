import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { stopLenis, startLenis } from '../../data/scrollManager';

export default function HelmetScene({ onLockChange }) {
  const containerRef = useRef(null);
  const [isLocked, setIsLocked] = useState(false);
  const controlsRef = useRef(null);
  const cameraRef = useRef(null);
  const defaultCameraPos = { x: 0, y: 0.4, z: 3.2 };
  const helmetGroupRef = useRef(null);
  const isLockedRef = useRef(false);

  useEffect(() => {
    isLockedRef.current = isLocked;
  }, [isLocked]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(defaultCameraPos.x, defaultCameraPos.y, defaultCameraPos.z);
    cameraRef.current = camera;

    // 2. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // 3. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.minDistance = 1.8;
    controls.maxDistance = 6.0;
    controls.enabled = false; // Disabled by default until user taps "TAP TO LOCK"
    controlsRef.current = controls;

    // 4. Studio Three-Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    // Key Light (Warm Key)
    const keyLight = new THREE.DirectionalLight(0xfff5ea, 2.8);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    // Fill Light (Cool Slate Blue)
    const fillLight = new THREE.DirectionalLight(0x88b0ea, 1.6);
    fillLight.position.set(-4, 2, 2);
    scene.add(fillLight);

    // Dutch Lion Orange Neon Backlight / Rim
    const rimLightOrange = new THREE.DirectionalLight(0xff4b00, 4.2);
    rimLightOrange.position.set(0, -2, -4);
    scene.add(rimLightOrange);

    // Red Bull Crimson Secondary Accent Light
    const accentCrimson = new THREE.PointLight(0xe10600, 3.5, 10);
    accentCrimson.position.set(2, -1, 2);
    scene.add(accentCrimson);

    // Gold Specular Light for Visor
    const goldLight = new THREE.PointLight(0xd4af37, 2.0, 8);
    goldLight.position.set(0, 3, 2);
    scene.add(goldLight);

    // 5. Helmet Root Group
    const helmetGroup = new THREE.Group();
    scene.add(helmetGroup);
    helmetGroupRef.current = helmetGroup;

    // Helper: Build Procedural 3D Aerodynamic F1 Helmet
    const buildProceduralHelmet = () => {
      const group = new THREE.Group();

      // Materials
      const carbonMaterial = new THREE.MeshStandardMaterial({
        color: 0x0d1017,
        roughness: 0.32,
        metalness: 0.6,
      });

      const orangeLiveryMaterial = new THREE.MeshStandardMaterial({
        color: 0xff4b00,
        roughness: 0.25,
        metalness: 0.5,
      });

      const crimsonLiveryMaterial = new THREE.MeshStandardMaterial({
        color: 0xe10600,
        roughness: 0.25,
        metalness: 0.4,
      });

      const goldStarMaterial = new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        roughness: 0.2,
        metalness: 0.9,
      });

      // Iridescent Visor Material (Spec: MeshPhysicalMaterial, clearcoat: 1.0, metalness: 0.85, roughness: 0.15)
      const visorMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xd4af37,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        metalness: 0.88,
        roughness: 0.14,
        reflectivity: 0.9,
        transmission: 0.15,
        ior: 1.6,
        sheen: 1.0,
        sheenColor: new THREE.Color(0xff4b00),
      });

      // Dome Shell
      const domeGeo = new THREE.SphereGeometry(1.0, 48, 48, 0, Math.PI * 2, 0, Math.PI * 0.72);
      const domeMesh = new THREE.Mesh(domeGeo, carbonMaterial);
      domeMesh.position.y = 0.1;
      group.add(domeMesh);

      // Rear and Side Shell
      const chinGeo = new THREE.CylinderGeometry(0.97, 0.85, 0.78, 48, 1, true, Math.PI * 0.36, Math.PI * 1.28);
      const chinMesh = new THREE.Mesh(chinGeo, carbonMaterial);
      chinMesh.position.y = -0.35;
      group.add(chinMesh);

      // Front Aerodynamic Chin Bar (Under Visor)
      const chinBarGeo = new THREE.CylinderGeometry(0.97, 0.90, 0.28, 48, 1, true, -Math.PI * 0.36, Math.PI * 0.72);
      const chinBarMesh = new THREE.Mesh(chinBarGeo, carbonMaterial);
      chinBarMesh.position.y = -0.40;
      group.add(chinBarMesh);

      // Lower Chin Scoop
      const scoopGeo = new THREE.BoxGeometry(0.44, 0.16, 0.38);
      const scoopMesh = new THREE.Mesh(scoopGeo, orangeLiveryMaterial);
      scoopMesh.position.set(0, -0.48, 0.82);
      group.add(scoopMesh);

      // Iridescent Curved Visor (Facing Camera)
      const visorGeo = new THREE.CylinderGeometry(0.98, 0.98, 0.44, 48, 1, true, -Math.PI * 0.36, Math.PI * 0.72);
      const visorMesh = new THREE.Mesh(visorGeo, visorMaterial);
      visorMesh.position.set(0, -0.05, 0);
      group.add(visorMesh);

      // Visor Sun Strip (Top of visor with Dutch Lion neon orange livery)
      const stripGeo = new THREE.CylinderGeometry(0.99, 0.99, 0.12, 48, 1, true, -Math.PI * 0.37, Math.PI * 0.74);
      const stripMesh = new THREE.Mesh(stripGeo, orangeLiveryMaterial);
      stripMesh.position.set(0, 0.15, 0);
      group.add(stripMesh);

      // Top Central Aero Fin / Intake Scoop
      const finGeo = new THREE.BoxGeometry(0.14, 0.18, 1.1);
      const finMesh = new THREE.Mesh(finGeo, orangeLiveryMaterial);
      finMesh.position.set(0, 1.08, -0.05);
      finMesh.rotation.x = -0.12;
      group.add(finMesh);

      // Rear Spoiler Lip
      const spoilerGeo = new THREE.BoxGeometry(0.9, 0.08, 0.32);
      const spoilerMesh = new THREE.Mesh(spoilerGeo, carbonMaterial);
      spoilerMesh.position.set(0, 0.55, -0.92);
      spoilerMesh.rotation.x = 0.35;
      group.add(spoilerMesh);

      // Side Livery Swooshes (Orange & Crimson)
      const swooshLGeo = new THREE.TorusGeometry(0.95, 0.04, 16, 48, Math.PI * 0.4);
      const swooshL = new THREE.Mesh(swooshLGeo, orangeLiveryMaterial);
      swooshL.position.set(-0.35, 0.15, 0.1);
      swooshL.rotation.set(0.4, 0.7, 0.3);
      group.add(swooshL);

      const swooshR = new THREE.Mesh(swooshLGeo, crimsonLiveryMaterial);
      swooshR.position.set(0.35, 0.15, 0.1);
      swooshR.rotation.set(0.4, -0.7, -0.3);
      group.add(swooshR);

      // 4 Championship Stars on Rear
      for (let i = 0; i < 4; i++) {
        const starGeo = new THREE.ConeGeometry(0.04, 0.08, 5);
        const starMesh = new THREE.Mesh(starGeo, goldStarMaterial);
        starMesh.position.set((i - 1.5) * 0.14, 0.62, -0.96);
        starMesh.rotation.x = Math.PI * 0.45;
        group.add(starMesh);
      }

      // HANS Tether Anchor Studs
      const hansGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.12, 16);
      const hansMat = new THREE.MeshStandardMaterial({ color: 0xe10600, metalness: 0.9, roughness: 0.2 });

      const hansLeft = new THREE.Mesh(hansGeo, hansMat);
      hansLeft.position.set(-0.95, -0.28, -0.15);
      hansLeft.rotation.z = Math.PI * 0.5;
      group.add(hansLeft);

      const hansRight = new THREE.Mesh(hansGeo, hansMat);
      hansRight.position.set(0.95, -0.28, -0.15);
      hansRight.rotation.z = -Math.PI * 0.5;
      group.add(hansRight);

      // Base Floating Telemetry Ring
      const ringGeo = new THREE.RingGeometry(1.2, 1.25, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xff4b00,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI * 0.5;
      ringMesh.position.y = -0.9;
      group.add(ringMesh);

      // Subtle Outer Dotted Ring
      const ringOuterGeo = new THREE.RingGeometry(1.4, 1.42, 48);
      const ringOuterMat = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.25,
      });
      const ringOuterMesh = new THREE.Mesh(ringOuterGeo, ringOuterMat);
      ringOuterMesh.rotation.x = Math.PI * 0.5;
      ringOuterMesh.position.y = -0.9;
      group.add(ringOuterMesh);

      group.position.y = 0.1;
      return group;
    };

    // 6. Attempt to load GLB model with graceful fallback
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      '/assets/models/max-helmet.glb',
      (gltf) => {
        helmetGroup.add(gltf.scene);
      },
      undefined,
      (_error) => {
        // Fallback to procedural aerodynamic F1 helmet
        const proceduralHelmet = buildProceduralHelmet();
        helmetGroup.add(proceduralHelmet);
      }
    );

    // 7. Mouse Parallax Reaction
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      if (isLockedRef.current) return; // In locked mode, OrbitControls takes over
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      targetRotationY = normX * 0.35;
      targetRotationX = normY * 0.2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 8. Viewport Visibility / IntersectionObserver to Pause RAF
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 9. Animation Loop
    let animationFrameId = null;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      if (controls.enabled) {
        controls.update();
      } else {
        // Gentle idle floating + parallax damp
        helmetGroup.rotation.y += (targetRotationY - helmetGroup.rotation.y) * 0.05;
        helmetGroup.rotation.x += (targetRotationX - helmetGroup.rotation.x) * 0.05;
        helmetGroup.position.y = Math.sin(elapsed * 1.5) * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 10. Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 11. Strict WebGL Memory Disposal Cleanup
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Deep disposal of geometries and materials
      scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => {
              cleanMaterial(mat);
            });
          } else {
            cleanMaterial(object.material);
          }
        }
      });

      controls.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    };

    function cleanMaterial(material) {
      material.dispose();
      for (const key of Object.keys(material)) {
        const value = material[key];
        if (value && typeof value === 'object' && 'minFilter' in value) {
          value.dispose();
        }
      }
    }
  }, []);

  // Listen to Escape key to exit lock mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isLockedRef.current) {
        toggleLock();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle "TAP TO LOCK" / "BACK TO SCROLL" Toggle
  const toggleLock = () => {
    const nextLocked = !isLocked;
    setIsLocked(nextLocked);
    if (onLockChange) onLockChange(nextLocked);

    if (controlsRef.current) {
      controlsRef.current.enabled = nextLocked;
    }

    if (nextLocked) {
      // Calling lenis.stop() as mandated by Rule 2
      stopLenis();
    } else {
      // Smoothly return camera to default transform, then resume scroll
      if (cameraRef.current && controlsRef.current) {
        gsap.to(cameraRef.current.position, {
          x: defaultCameraPos.x,
          y: defaultCameraPos.y,
          z: defaultCameraPos.z,
          duration: 0.85,
          ease: 'power3.out',
          onUpdate: () => {
            controlsRef.current.target.set(0, 0, 0);
            controlsRef.current.update();
          },
          onComplete: () => {
            controlsRef.current.target.set(0, 0, 0);
            controlsRef.current.update();
            controlsRef.current.enabled = false;
            // Restore smooth scrolling via lenis.start()
            startLenis();
          }
        });
      } else {
        startLenis();
      }
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className={`w-full h-full transition-all duration-300 ${
          isLocked ? 'cursor-grab active:cursor-grabbing ring-2 ring-[#FF4B00]/40 rounded-3xl' : ''
        }`}
      />

      {/* Floating "TAP TO LOCK" / "BACK TO SCROLL" Pill Button */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <button
          onClick={toggleLock}
          className={`group flex items-center space-x-2.5 px-6 py-3 rounded-full font-display-mv font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-2xl backdrop-blur-md cursor-pointer ${
            isLocked
              ? 'bg-[#FF4B00] text-[#090B10] border border-white/20 shadow-glow-orange scale-105'
              : 'bg-[#121621]/80 text-[#F8FAFC] border border-white/10 hover:border-[#FF4B00] hover:text-[#FF4B00]'
          }`}
        >
          {/* Animated Orbit / Lock Icon */}
          <span className="relative flex h-2.5 w-2.5">
            {isLocked ? (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#090B10] opacity-75" />
            ) : (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4B00] opacity-75" />
            )}
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                isLocked ? 'bg-[#090B10]' : 'bg-[#FF4B00]'
              }`}
            />
          </span>

          <span>{isLocked ? 'BACK TO SCROLL' : 'TAP TO LOCK 360°'}</span>

          <span className="font-mono text-[10px] opacity-70">
            {isLocked ? '[ESC / CLICK]' : '[ORBIT]'}
          </span>
        </button>
      </div>

      {/* Helper text when locked */}
      {isLocked && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
          <div className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#FF4B00]/30 text-[11px] font-mono text-[#FF4B00] font-bold tracking-wider uppercase animate-pulse">
            Free 360° Helmet Inspection Active • Page Scroll Locked
          </div>
        </div>
      )}
    </div>
  );
}
