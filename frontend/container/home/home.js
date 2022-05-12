const questions = document.querySelectorAll(".question-card");

questions.forEach((question) => {
  const button = question.querySelector("button");
  const answer = question.querySelector(".question-card__answer");
  console.log(button.textContent);
  console.log(answer);
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
