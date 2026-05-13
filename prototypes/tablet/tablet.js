// Tablet prototype navigation — hash-routed screen switcher with auto-advances
// Per spec §6.1 wiring map

(function () {
  'use strict';

  const screens = Array.from(document.querySelectorAll('.screen'));
  const labelEl = document.querySelector('.device-chrome__current');

  // setTimeout handles for auto-advance, so they can be cleared on screen change
  let advanceTimer = null;

  function showScreen(id) {
    if (advanceTimer) {
      clearTimeout(advanceTimer);
      advanceTimer = null;
    }
    let found = false;
    for (const s of screens) {
      const active = s.id === id;
      s.classList.toggle('is-active', active);
      if (active) found = true;
    }
    if (!found) {
      // Fallback to T1 if hash is unknown
      document.getElementById('t1').classList.add('is-active');
      id = 't1';
    }
    if (labelEl) {
      labelEl.textContent = id.toUpperCase();
    }
    // Auto-advance if data-auto attribute is set on the active screen
    const active = document.getElementById(id);
    const auto = active && active.dataset.auto;
    if (auto) {
      const [target, delay] = auto.split(':');
      advanceTimer = setTimeout(() => navigate(target), parseInt(delay, 10) || 1200);
    }
    // Focus the newly-active screen so screen readers announce the new context
    // and keyboard focus moves out of the now-hidden previous screen
    if (active) active.focus({ preventScroll: true });
    // Scroll viewport into view for narrow windows
    document.querySelector('.viewport')?.scrollIntoView({ behavior: 'instant', block: 'nearest' });
  }

  function navigate(id) {
    window.location.hash = id;
  }

  // Hash router
  window.addEventListener('hashchange', () => {
    const id = window.location.hash.slice(1) || 't1';
    showScreen(id);
  });

  // Initial render
  document.addEventListener('DOMContentLoaded', () => {
    // Make every screen programmatically focusable for route-change focus mgmt
    screens.forEach(s => s.setAttribute('tabindex', '-1'));
    const id = window.location.hash.slice(1) || 't1';
    showScreen(id);
  });

  // Delegate click navigation
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-go]');
    if (target) {
      e.preventDefault();
      navigate(target.dataset.go);
    }
  });
})();
