const questions = document.querySelectorAll(".question-card");
const bookmarks = document.querySelectorAll(".question-card__bookmark--filled");

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

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.style.opacity < 1
      ? (bookmark.style.opacity = 1)
      : (bookmark.style.opacity = 0.3);
  });
});
