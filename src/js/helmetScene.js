import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
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
  const defaultCameraPos = { x: 0, y: 0.35, z: 2.8 };

  // 1. Scene & Camera Setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  camera.position.set(defaultCameraPos.x, defaultCameraPos.y, defaultCameraPos.z);

  // 2. WebGL Renderer Setup
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.45;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  // 3. OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enablePan = false;
  controls.minDistance = 1.4;
  controls.maxDistance = 5.5;
  controls.enabled = false; // Disabled by default until user taps "TAP TO LOCK"

  // 4. Studio Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  // Key Light (Warm Key)
  const keyLight = new THREE.DirectionalLight(0xfff5ea, 3.2);
  keyLight.position.set(4, 5, 4);
  scene.add(keyLight);

  // Fill Light (Cool Slate Blue)
  const fillLight = new THREE.DirectionalLight(0x88b0ea, 1.8);
  fillLight.position.set(-4, 2, 2);
  scene.add(fillLight);

  // Dutch Lion Orange Neon Backlight / Rim
  const rimLightOrange = new THREE.DirectionalLight(0xff4b00, 4.5);
  rimLightOrange.position.set(0, -1.5, -4);
  scene.add(rimLightOrange);

  // Red Bull Crimson Secondary Accent Light
  const accentCrimson = new THREE.PointLight(0xe10600, 3.5, 12);
  accentCrimson.position.set(2, -1, 2);
  scene.add(accentCrimson);

  // Gold Specular Light for Visor
  const goldLight = new THREE.PointLight(0xd4af37, 2.5, 10);
  goldLight.position.set(0, 3, 2);
  scene.add(goldLight);

  // 5. Helmet Root Group
  const helmetGroup = new THREE.Group();
  scene.add(helmetGroup);

  // Base Floating Telemetry Rings
  const ringGeo = new THREE.RingGeometry(1.2, 1.25, 64);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xff4b00,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.45,
  });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.rotation.x = Math.PI * 0.5;
  ringMesh.position.y = -0.9;
  helmetGroup.add(ringMesh);

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
  helmetGroup.add(ringOuterMesh);

  helmetGroup.position.y = 0.05;

  // 6. Build Fallback Procedural Helmet
  const buildProceduralFallback = () => {
    const group = new THREE.Group();
    group.name = 'procedural-fallback';

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
    const visorMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xd4af37,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      metalness: 0.88,
      roughness: 0.14,
      reflectivity: 0.9,
    });

    const domeGeo = new THREE.SphereGeometry(1.0, 48, 48, 0, Math.PI * 2, 0, Math.PI * 0.72);
    const domeMesh = new THREE.Mesh(domeGeo, carbonMaterial);
    domeMesh.position.y = 0.1;
    group.add(domeMesh);

    const visorGeo = new THREE.CylinderGeometry(0.98, 0.98, 0.44, 48, 1, true, -Math.PI * 0.36, Math.PI * 0.72);
    const visorMesh = new THREE.Mesh(visorGeo, visorMaterial);
    visorMesh.position.set(0, -0.05, 0);
    group.add(visorMesh);

    const stripGeo = new THREE.CylinderGeometry(0.99, 0.99, 0.12, 48, 1, true, -Math.PI * 0.37, Math.PI * 0.74);
    const stripMesh = new THREE.Mesh(stripGeo, orangeLiveryMaterial);
    stripMesh.position.set(0, 0.15, 0);
    group.add(stripMesh);

    return group;
  };

  const fallbackHelmet = buildProceduralFallback();
  helmetGroup.add(fallbackHelmet);

  // 7. Load GLB Helmet Model from /assets/helm/000001474741.glb
  const gltfLoader = new GLTFLoader();
  const glbPath = '/assets/helm/000001474741.glb';

  gltfLoader.load(
    glbPath,
    (gltf) => {
      const model = gltf.scene;

      // Calculate Bounding Box to normalize scale and center the helmet
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      const maxDim = Math.max(size.x, size.y, size.z);
      const targetSize = 2.1; // Optimal framing for camera distance
      const scale = targetSize / (maxDim || 1);

      model.scale.setScalar(scale);

      // Center model pivot
      model.position.x = -center.x * scale;
      model.position.y = -center.y * scale + 0.05;
      model.position.z = -center.z * scale;

      // Enhance material shaders & shadows
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material.envMapIntensity = 1.4;
            child.material.needsUpdate = true;
          }
        }
      });

      // Remove fallback and add loaded authentic GLB model
      helmetGroup.remove(fallbackHelmet);
      helmetGroup.add(model);
    },
    (progress) => {
      // Progress handler
      if (progress.total > 0) {
        const percent = Math.round((progress.loaded / progress.total) * 100);
        const lockBadge = document.getElementById('lock-status-badge');
        if (lockBadge && !isLocked && percent < 100) {
          lockBadge.textContent = `LOADING 3D HELMET ${percent}%`;
        } else if (lockBadge && !isLocked) {
          lockBadge.textContent = 'SCROLL MODE';
        }
      }
    },
    (error) => {
      console.warn('Could not load GLB helmet model, retaining procedural fallback:', error);
    }
  );

  // 8. Mouse Parallax Reaction
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

  // 9. IntersectionObserver to pause requestAnimationFrame when Hero canvas is offscreen
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

  // 10. Animation Loop
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
      helmetGroup.position.y = 0.05 + Math.sin(elapsed * 1.5) * 0.04;
      ringMesh.rotation.z = elapsed * 0.2;
      ringOuterMesh.rotation.z = -elapsed * 0.15;
    }

    renderer.render(scene, camera);
  };

  animate();

  // 11. Resize Handler
  const handleResize = () => {
    if (!container) return;
    width = container.clientWidth || window.innerWidth;
    height = container.clientHeight || window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  window.addEventListener('resize', handleResize);

  // 12. Toggle "TAP TO LOCK 360°" / "BACK TO SCROLL"
  const setLockState = (locked) => {
    isLocked = locked;
    controls.enabled = locked;

    if (toggleBtn) {
      const btnText = toggleBtn.querySelector('.btn-text');
      if (btnText) {
        btnText.textContent = locked ? 'BACK TO SCROLL' : 'TAP TO LOCK 360°';
      }
      if (locked) {
        toggleBtn.classList.add('locked');
      } else {
        toggleBtn.classList.remove('locked');
      }
    }

    if (lockStatusBadge) {
      lockStatusBadge.textContent = locked ? '360° ORBIT ACTIVE • DRAG TO ROTATE' : 'SCROLL MODE';
      lockStatusBadge.style.backgroundColor = locked ? 'rgba(255, 75, 0, 0.2)' : 'rgba(255, 255, 255, 0.05)';
      lockStatusBadge.style.color = locked ? '#FF4B00' : '#8E96AA';
      lockStatusBadge.style.borderColor = locked ? 'rgba(255, 75, 0, 0.4)' : 'rgba(255, 255, 255, 0.1)';
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
