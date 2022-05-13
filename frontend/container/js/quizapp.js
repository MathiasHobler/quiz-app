export default function startQuizApp(quizApp) {
  quizApp.addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("navbar--hide");
    document.querySelector(".home").classList.toggle("home--hide");
    document.querySelector(".header").classList.toggle("header--hide");
    // quizApp.classList.toggle("quiz-app--hide");
    quizApp.style.display = "none";
  });
}
