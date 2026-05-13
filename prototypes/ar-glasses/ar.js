// AR Glasses prototype — same router pattern as tablet, different wiring (spec §6.2)

(function () {
  'use strict';

  const screens = Array.from(document.querySelectorAll('.screen'));
  const labelEl = document.querySelector('.device-chrome__current');
  let advanceTimer = null;

  function showScreen(id) {
    if (advanceTimer) { clearTimeout(advanceTimer); advanceTimer = null; }
    let found = false;
    for (const s of screens) {
      const active = s.id === id;
      s.classList.toggle('is-active', active);
      if (active) found = true;
    }
    if (!found) {
      document.getElementById('a1').classList.add('is-active');
      id = 'a1';
    }
    if (labelEl) labelEl.textContent = id.toUpperCase();
    const active = document.getElementById(id);
    const auto = active && active.dataset.auto;
    if (auto) {
      const [target, delay] = auto.split(':');
      advanceTimer = setTimeout(() => navigate(target), parseInt(delay, 10) || 1500);
    }
    if (active) active.focus({ preventScroll: true });
  }

  function navigate(id) { window.location.hash = id; }

  window.addEventListener('hashchange', () => {
    const id = window.location.hash.slice(1) || 'a1';
    showScreen(id);
  });

  document.addEventListener('DOMContentLoaded', () => {
    screens.forEach(s => s.setAttribute('tabindex', '-1'));
    const id = window.location.hash.slice(1) || 'a1';
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
