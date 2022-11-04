// console.clear();

//Dark-mode

//const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
//   console.log('switch to dark mode');
// });

// const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
// lightModeButton.addEventListener('click', () => {
//   bodyElement.classList.remove('dark');
//   console.log('switch to light mode');
// });

// const toggleModeButton = document.querySelector('[data-js="toggle-button"]');
// toggleModeButton.addEventListener('click', () => {
//   bodyElement.classList.toggle('dark');

// Bookmark Toggle

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkUnfilled = document.querySelector(
  '[data-js="bookmark-unfilled"]'
);
const bookmarkFilled = document.querySelector('[data-js="bookmark-filled"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkUnfilled.classList.toggle("hidden");
  bookmarkFilled.classList.toggle("hidden");
});

//Answer Button Show answer

const showAnswerButton = document.querySelector(
  '[data-js="show-answer-button"]'
);
const showAnswer = document.querySelector('[data-js="show-answer"]');

showAnswerButton.addEventListener("click", () => {
  showAnswer.classList.toggle("hidden");
});
