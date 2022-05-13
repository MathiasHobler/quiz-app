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
switchSides(navbar);
