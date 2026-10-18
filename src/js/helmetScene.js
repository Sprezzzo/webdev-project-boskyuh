import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { stopLenis, startLenis } from './lenisManager.js';

export function initHelmetScene(containerId = 'helmet-container', toggleBtnId = 'tap-to-lock-btn') {
  const container = document.getElementById(containerId);
  const toggleBtn = document.getElementById(toggleBtnId);
  const lockStatusBadge = document.getElementById('lock-status-badge');

  if (!container) return;

  let width = container.clientWidth || window.innerWidth;
  let height = container.clientHeight || window.innerHeight;

  let isLocked = false;
  const defaultCameraPos = { x: 0, y: 0.4, z: 3.2 };

  // 1. Scene & Camera Setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  camera.position.set(defaultCameraPos.x, defaultCameraPos.y, defaultCameraPos.z);

  // 2. WebGL Renderer
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
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

  // 4. Studio Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xfff5ea, 2.8);
  keyLight.position.set(4, 5, 4);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x88b0ea, 1.6);
  fillLight.position.set(-4, 2, 2);
  scene.add(fillLight);

  const rimLightOrange = new THREE.DirectionalLight(0xff4b00, 4.2);
  rimLightOrange.position.set(0, -2, -4);
  scene.add(rimLightOrange);

  const accentCrimson = new THREE.PointLight(0xe10600, 3.5, 10);
  accentCrimson.position.set(2, -1, 2);
  scene.add(accentCrimson);

  const goldLight = new THREE.PointLight(0xd4af37, 2.0, 8);
  goldLight.position.set(0, 3, 2);
  scene.add(goldLight);

  // 5. Build Procedural Aerodynamic F1 Helmet Group
  const helmetGroup = new THREE.Group();
  scene.add(helmetGroup);

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
  helmetGroup.add(domeMesh);

  // Rear and Side Shell
  const chinGeo = new THREE.CylinderGeometry(0.97, 0.85, 0.78, 48, 1, true, Math.PI * 0.36, Math.PI * 1.28);
  const chinMesh = new THREE.Mesh(chinGeo, carbonMaterial);
  chinMesh.position.y = -0.35;
  helmetGroup.add(chinMesh);

  // Front Aerodynamic Chin Bar
  const chinBarGeo = new THREE.CylinderGeometry(0.97, 0.90, 0.28, 48, 1, true, -Math.PI * 0.36, Math.PI * 0.72);
  const chinBarMesh = new THREE.Mesh(chinBarGeo, carbonMaterial);
  chinBarMesh.position.y = -0.40;
  helmetGroup.add(chinBarMesh);

  // Lower Chin Scoop
  const scoopGeo = new THREE.BoxGeometry(0.44, 0.16, 0.38);
  const scoopMesh = new THREE.Mesh(scoopGeo, orangeLiveryMaterial);
  scoopMesh.position.set(0, -0.48, 0.82);
  helmetGroup.add(scoopMesh);

  // Iridescent Curved Visor
  const visorGeo = new THREE.CylinderGeometry(0.98, 0.98, 0.44, 48, 1, true, -Math.PI * 0.36, Math.PI * 0.72);
  const visorMesh = new THREE.Mesh(visorGeo, visorMaterial);
  visorMesh.position.set(0, -0.05, 0);
  helmetGroup.add(visorMesh);

  // Visor Sun Strip with Lion Orange
  const stripGeo = new THREE.CylinderGeometry(0.99, 0.99, 0.12, 48, 1, true, -Math.PI * 0.37, Math.PI * 0.74);
  const stripMesh = new THREE.Mesh(stripGeo, orangeLiveryMaterial);
  stripMesh.position.set(0, 0.15, 0);
  helmetGroup.add(stripMesh);

  // Top Aero Fin / Intake Scoop
  const finGeo = new THREE.BoxGeometry(0.14, 0.18, 1.1);
  const finMesh = new THREE.Mesh(finGeo, orangeLiveryMaterial);
  finMesh.position.set(0, 1.08, -0.05);
  finMesh.rotation.x = -0.12;
  helmetGroup.add(finMesh);

  // Rear Spoiler Lip
  const spoilerGeo = new THREE.BoxGeometry(0.9, 0.08, 0.32);
  const spoilerMesh = new THREE.Mesh(spoilerGeo, carbonMaterial);
  spoilerMesh.position.set(0, 0.55, -0.92);
  spoilerMesh.rotation.x = 0.35;
  helmetGroup.add(spoilerMesh);

  // Side Livery Swooshes
  const swooshGeo = new THREE.TorusGeometry(0.95, 0.04, 16, 48, Math.PI * 0.4);
  const swooshL = new THREE.Mesh(swooshGeo, orangeLiveryMaterial);
  swooshL.position.set(-0.35, 0.15, 0.1);
  swooshL.rotation.set(0.4, 0.7, 0.3);
  helmetGroup.add(swooshL);

  const swooshR = new THREE.Mesh(swooshGeo, crimsonLiveryMaterial);
  swooshR.position.set(0.35, 0.15, 0.1);
  swooshR.rotation.set(0.4, -0.7, -0.3);
  helmetGroup.add(swooshR);

  // 4 Championship Stars
  for (let i = 0; i < 4; i++) {
    const starGeo = new THREE.ConeGeometry(0.04, 0.08, 5);
    const starMesh = new THREE.Mesh(starGeo, goldStarMaterial);
    starMesh.position.set((i - 1.5) * 0.14, 0.62, -0.96);
    starMesh.rotation.x = Math.PI * 0.45;
    helmetGroup.add(starMesh);
  }

  // Base Floating Telemetry Rings
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
  helmetGroup.add(ringMesh);

  helmetGroup.position.y = 0.1;

  // 6. Mouse Parallax Reaction
  let targetRotationX = 0;
  let targetRotationY = 0;

  const handleMouseMove = (e) => {
    if (isLocked) return;
    const normX = (e.clientX / window.innerWidth) * 2 - 1;
    const normY = (e.clientY / window.innerHeight) * 2 - 1;
    targetRotationY = normX * 0.35;
    targetRotationX = normY * 0.2;
  };

  window.addEventListener('mousemove', handleMouseMove, { passive: true });

  // 7. IntersectionObserver to pause requestAnimationFrame when Hero canvas is offscreen
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

  // 8. Animation Loop
  let animationFrameId = null;
  const clock = new THREE.Clock();

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    if (!isVisible) return;

    const elapsed = clock.getElapsedTime();

    if (controls.enabled) {
      controls.update();
    } else {
      helmetGroup.rotation.y += (targetRotationY - helmetGroup.rotation.y) * 0.05;
      helmetGroup.rotation.x += (targetRotationX - helmetGroup.rotation.x) * 0.05;
      helmetGroup.position.y = 0.1 + Math.sin(elapsed * 1.5) * 0.04;
      ringMesh.rotation.z = elapsed * 0.2;
    }

    renderer.render(scene, camera);
  };

  animate();

  // 9. Resize Handler
  const handleResize = () => {
    if (!container) return;
    width = container.clientWidth || window.innerWidth;
    height = container.clientHeight || window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  window.addEventListener('resize', handleResize);

  // 10. Toggle "TAP TO LOCK 360°" / "BACK TO SCROLL"
  const setLockState = (locked) => {
    isLocked = locked;
    controls.enabled = locked;

    if (toggleBtn) {
      const btnText = toggleBtn.querySelector('.btn-text');
      if (btnText) {
        btnText.textContent = locked ? 'BACK TO SCROLL' : 'TAP TO LOCK 360°';
      }
      if (locked) {
        toggleBtn.classList.add('bg-[#FF4B00]', 'text-white', 'border-[#FF4B00]', 'shadow-glow-orange');
        toggleBtn.classList.remove('bg-black/60', 'text-[#8E96AA]');
      } else {
        toggleBtn.classList.remove('bg-[#FF4B00]', 'text-white', 'border-[#FF4B00]', 'shadow-glow-orange');
        toggleBtn.classList.add('bg-black/60', 'text-[#8E96AA]');
      }
    }

    if (lockStatusBadge) {
      lockStatusBadge.textContent = locked ? '360° ORBIT ACTIVE • DRAG TO ROTATE' : 'SCROLL MODE';
      lockStatusBadge.className = locked
        ? 'px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FF4B00]/20 text-[#FF4B00] border border-[#FF4B00]/40'
        : 'px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 text-[#8E96AA] border border-white/10';
    }

    if (locked) {
      stopLenis();
    } else {
      gsap.to(camera.position, {
        x: defaultCameraPos.x,
        y: defaultCameraPos.y,
        z: defaultCameraPos.z,
        duration: 0.85,
        ease: 'power3.out',
        onUpdate: () => {
          controls.target.set(0, 0, 0);
          controls.update();
        },
        onComplete: () => {
          controls.target.set(0, 0, 0);
          controls.update();
          controls.enabled = false;
          startLenis();
        },
      });
    }
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLockState(!isLocked);
    });
  }

  // Escape key exits lock mode
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isLocked) {
      setLockState(false);
    }
  });

  return {
    destroy: () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    },
  };
}
