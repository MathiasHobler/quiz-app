//quiz-app---------------------------------------------------------------------------------------------------------------------------------

const quizApp = document.querySelector(".quiz-app");

quizApp.addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("navbar--hide");
  document.querySelector(".home").classList.toggle("home--hide");
  document.querySelector(".header").classList.toggle("header--hide");
  quizApp.classList.toggle("quiz-app--hide");
});

//question-cards---------------------------------------------------------------------------------------------------------------------------------
const questions = document.querySelectorAll(".question-card");

questions.forEach((question) => {
  const button = question.querySelector("button");
  const answer = question.querySelector(".question-card__answer");

  button.addEventListener("click", () => {
    if (button.textContent === "Show Answer") {
      button.textContent = "Hide Answer";
      answer.classList.remove("hide");
    } else {
      button.textContent = "Show Answer";
      answer.classList.add("hide");
    }
  });
});

//bookmarks---------------------------------------------------------------------------------------------------------------------------------
const bookmarks = document.querySelectorAll(".question-card__bookmark--filled");

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.style.opacity < 1
      ? (bookmark.style.opacity = 1)
      : (bookmark.style.opacity = 0.3);
  });
});

//navbar---------------------------------------------------------------------------------------------------------------------------------

document.querySelector(".navbar__home").addEventListener("click", () => {
  document.querySelector(".home").classList.remove("home--hide");
  document.querySelector(".bookmarked").classList.add("bookmarked--hide");
  document.querySelector(".create").classList.add("create--hide");
  document.querySelector(".profile").classList.add("profile--hide");
});

document.querySelector(".navbar__bookmarked").addEventListener("click", () => {
  document.querySelector(".home").classList.add("home--hide");
  document.querySelector(".bookmarked").classList.remove("bookmarked--hide");
  document.querySelector(".create").classList.add("create--hide");
  document.querySelector(".profile").classList.add("profile--hide");
});

document.querySelector(".navbar__create").addEventListener("click", () => {
  document.querySelector(".home").classList.add("home--hide");
  document.querySelector(".bookmarked").classList.add("bookmarked--hide");
  document.querySelector(".create").classList.remove("create--hide");
  document.querySelector(".profile").classList.add("profile--hide");
});

document.querySelector(".navbar__profile").addEventListener("click", () => {
  document.querySelector(".home").classList.add("home--hide");
  document.querySelector(".bookmarked").classList.add("bookmarked--hide");
  document.querySelector(".create").classList.add("create--hide");
  document.querySelector(".profile").classList.remove("profile--hide");
});
