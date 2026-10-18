import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initStatsBento() {
  const statNumbers = document.querySelectorAll('[data-counter-target]');
  if (!statNumbers.length) return;

  statNumbers.forEach((el) => {
    const target = parseFloat(el.getAttribute('data-counter-target'));
    const isDecimal = el.getAttribute('data-counter-decimal') === 'true';
    const suffix = el.getAttribute('data-counter-suffix') || '';

    const counterObj = { val: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(counterObj, {
          val: target,
          duration: 2.2,
          ease: 'power3.out',
          onUpdate: () => {
            if (isDecimal) {
              el.textContent = counterObj.val.toFixed(1) + suffix;
            } else {
              el.textContent = Math.floor(counterObj.val).toLocaleString() + suffix;
            }
          },
        });
      },
    });
  });

  // Table category tab filtering
  const tableFilterBtns = document.querySelectorAll('[data-table-filter]');
  const tableRows = document.querySelectorAll('[data-season-row]');

  if (tableFilterBtns.length && tableRows.length) {
    tableFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-table-filter');

        tableFilterBtns.forEach((b) => {
          b.classList.remove('bg-[#FF4B00]', 'text-white', 'border-[#FF4B00]');
          b.classList.add('bg-white/5', 'text-[#8E96AA]', 'border-white/10');
        });
        btn.classList.add('bg-[#FF4B00]', 'text-white', 'border-[#FF4B00]');
        btn.classList.remove('bg-white/5', 'text-[#8E96AA]', 'border-white/10');

        tableRows.forEach((row) => {
          const category = row.getAttribute('data-era');
          if (filter === 'all' || category === filter) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  }
}
