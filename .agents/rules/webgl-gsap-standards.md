---
trigger: always_on
---

mkdir -p .agents/rules
cat << 'EOF' > .agents/rules/webgl-gsap-standards.md
---
trigger: glob
description: "Enforces 60fps GSAP ScrollTrigger cleanup, Lenis ticker sync, and Three.js WebGL memory disposal across all frontend components."
globs: "*.js, *.jsx, *.ts, *.tsx, *.glsl, *.css"
---

# WebGL, GSAP & Tailwind Engineering Invariants

1. **Preserve Existing Configs:** Always inspect and extend the existing `package.json`, `vite.config.js`, `tailwind.config.js`, and `postcss.config.js` at the repository root without overwriting teammate configurations.
2. **Lenis + ScrollTrigger Sync:** Never instantiate multiple `Lenis` instances. Connect `lenis.on('scroll', ScrollTrigger.update)` and drive Lenis strictly via `gsap.ticker.add()`. When the 3D Hero is in `"TAP TO LOCK"` mode, call `lenis.stop()`; when `"BACK TO SCROLL"` is clicked, call `lenis.start()`.
3. **Strict GSAP Cleanup:** Wrap all page animations in `gsap.context()` (or `useGSAP()`) and revert them on component unmount so route transitions between `/`, `/on-track`, and `/off-track` never leave orphaned pin-spacers.
4. **WebGL Memory Management:** In Three.js scenes, always dispose of geometries, materials, textures, and `WebGLRenderer` instances on unmount, and pause `requestAnimationFrame` when the Hero canvas scrolls out of the viewport (`IntersectionObserver`).
EOF