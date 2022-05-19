import startQuizApp from "./container/js/quizapp.js";
import showHideAnswer from "./container/js/questions.js";
import toggleBookmark from "./container/js/bookmarks.js";
import switchSides from "./container/js/navbar.js";
import countCharacters from "./container/js/create.js";

//quiz-app---------------------------------------------------------------------------------------------------------------------------------
const quizApp = document.querySelector(".start-screen");
startQuizApp(quizApp);

//=====================================================================dynamic html=====================================================================
const quizapp = document.querySelector(".quizapp");

const newQuizCard = document.createElement("section");
newQuizCard.classList.add("question-card");

const titel = document.createElement("h2");
titel.classList.add("question-card__titel");
titel.textContent = "Question:";
newQuizCard.append(titel);

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.classList.add("question-card__bookmark");
const svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
const svgPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
svg.setAttribute("viewBox", "0 0 24 24");

svgPath.setAttribute(
  "d",
  "M19,20.6l-7-2.6l-7,2.6L5,4c0-0.5,0.4-1,1-1h12c0.6,0,1,0.4,1,1V20.6z"
);
svgPath.classList.add("question-card__bookmark--filled");
svgPath2.setAttribute(
  "d",
  "M4,22L4,4c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v18l-8-3L4,22z M12,16.9l6,2.3V4H6l0,15.1L12,16.9z"
);
svg.append(svgPath);
svg.append(svgPath2);
newQuizCard.append(svg);

const question = document.createElement("p");
question.textContent = "test question";
question.classList.add("question-card__text");
newQuizCard.append(question);

const btn = document.createElement("button");
btn.classList.add("question-card__btn");
btn.textContent = "Show Answer";
newQuizCard.append(btn);

const answer = document.createElement("p");
answer.textContent = "test answer";
answer.classList.add("question-card__answer", "hide");
newQuizCard.append(answer);

const tagsContainer = document.createElement("section");
tagsContainer.classList.add("question-card__tags-container");
const tags = ["tag1", "tag2", "tag3", "tag4"];
tags.forEach((tag) => {
  const element = document.createElement("p");
  element.classList.add("question-card__tags");
  element.textContent = tag;

  tagsContainer.append(element);
});
newQuizCard.append(tagsContainer);

quizapp.append(newQuizCard);

//question-cards---------------------------------------------------------------------------------------------------------------------------------
const questions = document.querySelectorAll(".question-card");
questions.forEach(showHideAnswer);

//bookmarks---------------------------------------------------------------------------------------------------------------------------------
const bookmarks = document.querySelectorAll(".question-card__bookmark--filled");
bookmarks.forEach(toggleBookmark);

//navbar---------------------------------------------------------------------------------------------------------------------------------
const navbar = document.querySelectorAll(".navbar__link");
switchSides(navbar);

//count values of input fields --------------------------------------------------------------
const inputs = document.querySelectorAll("input");
// inputs.forEach(countCharacters);

const logs = document.querySelectorAll(".log-value");

inputs.forEach(function (value, index) {
  value.addEventListener("input", () => {
    const x = value.textLength;
    logs[index].innerHTML = x;
  });
});
