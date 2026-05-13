// AR Glasses prototype — same router pattern as tablet, different wiring (spec §6.2)

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
      document.getElementById('a1').classList.add('is-active');
      id = 'a1';
    }
    if (labelEl) labelEl.textContent = id.toUpperCase();
    const active = document.getElementById(id);
    const auto = active && active.dataset.auto;
    if (auto) {
      const [target, delay] = auto.split(':');
      const ms = parseInt(delay, 10) || 1500;
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
    // Long-press elements have their own handler — skip them in the click delegator
    if (target && !target.classList.contains('gesture-longpress')) {
      e.preventDefault();
      navigate(target.dataset.go);
    }
  });

  // Long-press handler — must hold for the specified duration to trigger.
  // Matches the AR spec: A4 capture is a hold gesture, not a tap.
  function bindLongPress() {
    document.querySelectorAll('.gesture-longpress').forEach(el => {
      let timer = null;
      const ms = parseInt(el.dataset.longpressMs, 10) || 600;
      const start = () => {
        cancel();
        el.classList.add('is-pressing');
        timer = setTimeout(() => {
          el.classList.remove('is-pressing');
          navigate(el.dataset.go);
        }, ms);
      };
      const cancel = () => {
        if (timer) { clearTimeout(timer); timer = null; }
        el.classList.remove('is-pressing');
      };
      el.addEventListener('mousedown', start);
      el.addEventListener('touchstart', start, { passive: true });
      el.addEventListener('mouseup', cancel);
      el.addEventListener('mouseleave', cancel);
      el.addEventListener('touchend', cancel);
      el.addEventListener('touchcancel', cancel);
      // Keyboard equivalent — Space/Enter held also triggers
      el.addEventListener('keydown', (e) => {
        if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) start();
      });
      el.addEventListener('keyup', cancel);
      el.addEventListener('blur', cancel);
    });
  }
  document.addEventListener('DOMContentLoaded', bindLongPress);
})();
