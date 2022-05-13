import startQuizApp from "./container/js/quizapp.js";
import showHideAnswer from "./container/js/questions.js";
import toggleBookmark from "./container/js/bookmarks.js";
import switchSides from "./container/js/navbar.js";
//quiz-app---------------------------------------------------------------------------------------------------------------------------------

const quizApp = document.querySelector(".quiz-app");
startQuizApp(quizApp);

//question-cards---------------------------------------------------------------------------------------------------------------------------------
const questions = document.querySelectorAll(".question-card");
questions.forEach(showHideAnswer);

//bookmarks---------------------------------------------------------------------------------------------------------------------------------
const bookmarks = document.querySelectorAll(".question-card__bookmark--filled");
bookmarks.forEach(toggleBookmark);

//navbar---------------------------------------------------------------------------------------------------------------------------------

const navbar = document.querySelectorAll(".navbar__link");
// navbar.forEach(switchSides);
switchSides(navbar);

// document.querySelector(".navbar__home").addEventListener("click", () => {
//   document.querySelector(".home").classList.remove("home--hide");
//   document.querySelector(".bookmarked").classList.add("bookmarked--hide");
//   document.querySelector(".create").classList.add("create--hide");
//   document.querySelector(".profile").classList.add("profile--hide");
//   document.querySelector(".header__title").textContent = "Quiz App";
// });

// document.querySelector(".navbar__bookmarked").addEventListener("click", () => {
//   document.querySelector(".home").classList.add("home--hide");
//   document.querySelector(".bookmarked").classList.remove("bookmarked--hide");
//   document.querySelector(".create").classList.add("create--hide");
//   document.querySelector(".profile").classList.add("profile--hide");
//   document.querySelector(".header__title").textContent = "Bookmarked";
// });

// document.querySelector(".navbar__create").addEventListener("click", () => {
//   document.querySelector(".home").classList.add("home--hide");
//   document.querySelector(".bookmarked").classList.add("bookmarked--hide");
//   document.querySelector(".create").classList.remove("create--hide");
//   document.querySelector(".profile").classList.add("profile--hide");
//   document.querySelector(".header__title").textContent = "Create";
// });

// document.querySelector(".navbar__profile").addEventListener("click", () => {
//   document.querySelector(".home").classList.add("home--hide");
//   document.querySelector(".bookmarked").classList.add("bookmarked--hide");
//   document.querySelector(".create").classList.add("create--hide");
//   document.querySelector(".profile").classList.remove("profile--hide");
//   document.querySelector(".header__title").textContent = "Profile";
// });
