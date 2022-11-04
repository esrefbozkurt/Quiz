console.clear();

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

//add quesrtion card

const body = document.querySelector("body");

const questionInput = document.querySelector('[data-js="your-question"]');
const answerInput = document.querySelector('[data-js="your-answer"]');
const tagInput = document.querySelector('[data-js="your-tag"]');
const submitButton = document.querySelector('[data-js="submit-button"]');

submitButton.addEventListener("submit", (event) => {
  const newQuizcard = document.createElement("article");
  newQuizcard.classList.add("quiz__card");
  body.append(newQuizcard);

  const myContent = document.createElement("p");
  myContent.classList.add("post__content");
  myContent.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  myPost.append(myContent);
});
