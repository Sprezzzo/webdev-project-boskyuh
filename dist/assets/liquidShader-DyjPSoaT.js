import{n as e,r as t,t as n}from"./vendor-motion-FEXeT_29.js";import{C as r,b as i,g as a,m as o,o as s,r as c,u as l,x as u}from"./vendor-three-DznedWLY.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),t.registerPlugin(e);var d=null,f=!1;function p(){return d||(d=new n({duration:1.2,easing:e=>Math.min(1,1.001-2**(-10*e)),orientation:`vertical`,gestureOrientation:`vertical`,smoothWheel:!0,touchMultiplier:2}),d.on(`scroll`,e.update),f||=(t.ticker.add(e=>{d?.raf(e*1e3)}),t.ticker.lagSmoothing(0),!0),document.querySelectorAll(`a[href^="#"]`).forEach(e=>{e.addEventListener(`click`,t=>{let n=e.getAttribute(`href`);if(n&&n!==`#`&&n.startsWith(`#`)){let e=document.querySelector(n);e&&(t.preventDefault(),d.scrollTo(e,{offset:-80}))}})}),d)}function m(){d&&d.stop()}function h(){d&&d.start()}function g(){return d}function _(){let e=document.getElementById(`global-navbar`),n=document.getElementById(`curtain-toggle-btn`),r=document.getElementById(`curtain-menu`),i=document.getElementById(`hamburger-line-1`),a=document.getElementById(`hamburger-line-2`),o=document.getElementById(`magnetic-pass-btn`),s=!1,c=()=>{e&&(window.scrollY>40?(e.classList.add(`scrolled`,`bg-[#090B10]/85`,`backdrop-blur-xl`,`border-[#FF4B00]/25`,`shadow-2xl`,`py-3`),e.classList.remove(`bg-transparent`,`border-transparent`,`py-5`)):(e.classList.remove(`scrolled`,`bg-[#090B10]/85`,`backdrop-blur-xl`,`border-[#FF4B00]/25`,`shadow-2xl`,`py-3`),e.classList.add(`bg-transparent`,`border-transparent`,`py-5`)))};window.addEventListener(`scroll`,c,{passive:!0}),c();let l=e=>{if(s=e===void 0?!s:e,r){if(s){m(),r.classList.add(`open`),r.classList.remove(`pointer-events-none`,`opacity-0`),r.classList.add(`pointer-events-auto`,`opacity-100`),i&&a&&(i.style.transform=`translateY(4px) rotate(45deg)`,a.style.transform=`translateY(-4px) rotate(-45deg)`,i.classList.add(`bg-[#FF4B00]`),a.classList.add(`bg-[#FF4B00]`));let e=r.querySelectorAll(`.curtain-link-item, .curtain-nav-link`);t.fromTo(e,{y:40,opacity:0},{y:0,opacity:1,duration:.5,stagger:.08,ease:`power3.out`})}else h(),r.classList.remove(`open`),r.classList.add(`opacity-0`),r.classList.remove(`opacity-100`),setTimeout(()=>{s||(r.classList.add(`pointer-events-none`),r.classList.remove(`pointer-events-auto`))},400),i&&a&&(i.style.transform=`translateY(0) rotate(0deg)`,a.style.transform=`translateY(0) rotate(0deg)`,i.classList.remove(`bg-[#FF4B00]`),a.classList.remove(`bg-[#FF4B00]`))}};n&&n.addEventListener(`click`,()=>l()),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&s&&l(!1)}),r&&r.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{l(!1)})}),o&&(o.addEventListener(`mousemove`,e=>{let t=o.getBoundingClientRect(),n=e.clientX-t.left-t.width/2,r=e.clientY-t.top-t.height/2;o.style.transform=`translate(${n*.25}px, ${r*.25}px)`}),o.addEventListener(`mouseleave`,()=>{o.style.transform=`translate(0px, 0px)`}));let u=window.location.pathname;document.querySelectorAll(`[data-route]`).forEach(e=>{let t=e.getAttribute(`data-route`);(t===`/`&&(u===`/`||u.endsWith(`index.html`))||t!==`/`&&u.includes(t))&&(e.classList.add(`text-[#FF4B00]`,`border-b-2`,`border-[#FF4B00]`),e.classList.remove(`text-[#8E96AA]`))})}var v=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,y=`
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
`;function b(e=`liquid-cursor-container`){let t=document.getElementById(e);if(!t)return;let n=window.innerWidth,d=window.innerHeight,f=new i,p=new o(-1,1,1,-1,0,1),m=new c({alpha:!0,antialias:!1});m.setSize(n,d),m.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.appendChild(m.domElement);let h={x:n*.5,y:d*.5,prevX:n*.5,prevY:d*.5,vx:0,vy:0},g={u_resolution:{value:new r(n,d)},u_mouse:{value:new r(n*.5,d*.5)},u_velocity:{value:new r(0,0)},u_time:{value:0}},_=new a(2,2),b=new u({vertexShader:v,fragmentShader:y,uniforms:g,transparent:!0,blending:2}),x=new l(_,b);f.add(x);let S=null,C=new s,w=e=>{let t=e.clientX,n=e.clientY;h.vx=(t-h.prevX)*.6,h.vy=(n-h.prevY)*.6,h.x=t,h.y=n,h.prevX=t,h.prevY=n};window.addEventListener(`mousemove`,w,{passive:!0});let T=()=>{n=window.innerWidth,d=window.innerHeight,m.setSize(n,d),g.u_resolution.value.set(n,d)};window.addEventListener(`resize`,T);let E=()=>{S=requestAnimationFrame(E),g.u_time.value=C.getElapsedTime(),g.u_mouse.value.x+=(h.x-g.u_mouse.value.x)*.12,g.u_mouse.value.y+=(h.y-g.u_mouse.value.y)*.12,g.u_velocity.value.x+=(h.vx-g.u_velocity.value.x)*.1,g.u_velocity.value.y+=(h.vy-g.u_velocity.value.y)*.1,h.vx*=.92,h.vy*=.92,m.render(f,p)};return E(),{destroy:()=>{S&&cancelAnimationFrame(S),window.removeEventListener(`mousemove`,w),window.removeEventListener(`resize`,T),_.dispose(),b.dispose(),m.dispose(),t.contains(m.domElement)&&t.removeChild(m.domElement)}}}export{h as a,p as i,_ as n,m as o,g as r,b as t};