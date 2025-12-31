document.addEventListener('DOMContentLoaded', () => {
  const hiddenElements = document.querySelectorAll('.hidden');

  hiddenElements.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('revealed');
    });
  });
});
