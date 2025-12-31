document.addEventListener('DOMContentLoaded', () => {
  const hiddenElements = document.querySelectorAll('.hidden');
  const DOUBLE_TAP_DELAY = 300; // ms

  hiddenElements.forEach(el => {
    let lastTap = 0;

    el.addEventListener('click', () => {
      const now = Date.now();

      if (now - lastTap < DOUBLE_TAP_DELAY) {
        el.classList.toggle('revealed');
        lastTap = 0;
      } else {
        lastTap = now;
      }
    });
  });
});
