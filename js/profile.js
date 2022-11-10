//Dark-mode

const nightIcon = document.querySelector('[data-js="nighticon"]');
const darkIcon = document.querySelector('[ data-js="darkicon"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  nightIcon.classList.toggle("hidden");
  darkIcon.classList.toggle("hidden");
});
