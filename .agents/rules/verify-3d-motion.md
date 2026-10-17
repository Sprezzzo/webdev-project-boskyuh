---
trigger: always_on
---

mkdir -p .agents/skills/verify-3d-motion
cat << 'EOF' > .agents/skills/verify-3d-motion/SKILL.md
---
name: verify-3d-motion
description: Verifies Vite compilation, Three.js WebGL canvas rendering, liquid cursor shader responsiveness, and GSAP ScrollTrigger pin cleanup across Home, On Track, and Off Track pages.
---

# Verify 3D Motion & Page Transitions

1. Ensure the Vite dev server is running (`npm run dev`).
2. Open the local URL in the integrated browser / headless preview tool.
3. Verify zero runtime console errors or WebGL context loss warnings.
4. Test the Homepage `"TAP TO LOCK"` button: confirm OrbitControls rotate the 3D helmet while page scroll is locked, and `"BACK TO SCROLL"` restores smooth scrolling.
5. Navigate sequentially through `Home` -> `On Track` -> `Off Track` via the fullscreen Navbar curtain overlay and verify `ScrollTrigger.refresh()` executes cleanly on each route change.
6. Run `npm run build` to confirm zero bundle or asset path errors.
EOF