export default function switchSides(navbarlinks) {
  const articles = document.querySelectorAll("article");
  navbarlinks.forEach(function (link, index) {
    link.addEventListener("click", () => {
      articles.forEach(function (article, indexAr) {
        if (index === indexAr) {
          article.classList.remove("hide");
          document.querySelector(".header__title").textContent =
            article.className;
        } else {
          article.classList.add("hide");
        }
      });
    });
  });
}
