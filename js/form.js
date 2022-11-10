console.clear();

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
