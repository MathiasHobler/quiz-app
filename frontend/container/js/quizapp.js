export default function startQuizApp(quizApp) {
  quizApp.addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("hide");
    document.querySelector(".quizapp").classList.toggle("hide");
    document.querySelector(".header").classList.toggle("hide");
    quizApp.style.display = "none";
  });
}
