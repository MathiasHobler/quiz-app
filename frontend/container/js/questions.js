export default function showHideAnswer(question) {
  const button = question.querySelector("button");
  const answer = question.querySelector(".question-card__answer");

  button.addEventListener("click", () => {
    if (button.textContent.includes("Show Answer")) {
      button.textContent = "Hide Answer";
      answer.classList.remove("hide");
    } else {
      button.textContent = "Show Answer";
      answer.classList.add("hide");
    }
  });
}
