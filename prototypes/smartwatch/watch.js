// Smartwatch prototype — auto-advances per spec §6.3

(function () {
  'use strict';

  const screens = Array.from(document.querySelectorAll('.screen'));
  const labelEl = document.querySelector('.device-chrome__current');
  let advanceTimer = null;

  function showScreen(id) {
    if (advanceTimer) { clearTimeout(advanceTimer); advanceTimer = null; }
    document.querySelectorAll('.auto-advance-bar').forEach(el => el.remove());
    let found = false;
    for (const s of screens) {
      const active = s.id === id;
      s.classList.toggle('is-active', active);
      if (active) found = true;
    }
    if (!found) {
      document.getElementById('w1').classList.add('is-active');
      id = 'w1';
    }
    if (labelEl) labelEl.textContent = id.toUpperCase();
    const active = document.getElementById(id);
    const auto = active && active.dataset.auto;
    if (auto) {
      const [target, delay] = auto.split(':');
      const ms = parseInt(delay, 10) || 2000;
      const bar = document.createElement('div');
      bar.className = 'auto-advance-bar';
      active.appendChild(bar);
      requestAnimationFrame(() => {
        bar.style.transition = `width ${ms}ms linear`;
        bar.classList.add('auto-advance-bar--filling');
      });
      advanceTimer = setTimeout(() => navigate(target), ms);
    }
    if (active) active.focus({ preventScroll: true });
  }

  function navigate(id) { window.location.hash = id; }

  window.addEventListener('hashchange', () => {
    const id = window.location.hash.slice(1) || 'w1';
    showScreen(id);
  });

  document.addEventListener('DOMContentLoaded', () => {
    screens.forEach(s => s.setAttribute('tabindex', '-1'));
    const id = window.location.hash.slice(1) || 'w1';
    showScreen(id);
  });

  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-go]');
    if (target) {
      e.preventDefault();
      navigate(target.dataset.go);
    }
  });
})();
