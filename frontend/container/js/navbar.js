export default function switchSides(navbarlinks) {
  navbarlinks.forEach(function (link) {
    link.addEventListener("click", () => {
      if (link.classList.contains("navbar__home")) {
        document.querySelector(".header__title").textContent = "Quiz App";
        // navbarlinks.forEach(element).style.display = "none";
        // link.style.display = "";
        document.querySelector(".home").classList.remove("home--hide");
        document.querySelector(".bookmarked").classList.add("bookmarked--hide");
        document.querySelector(".create").classList.add("create--hide");
        document.querySelector(".profile").classList.add("profile--hide");
      } else if (link.classList.contains("navbar__bookmarked")) {
        document.querySelector(".header__title").textContent = "Bookmarked";
        // navbarlinks.forEach().style.display = "none";
        // link.style.display = "";
        document.querySelector(".home").classList.add("home--hide");
        document
          .querySelector(".bookmarked")
          .classList.remove("bookmarked--hide");
        document.querySelector(".create").classList.add("create--hide");
        document.querySelector(".profile").classList.add("profile--hide");
      } else if (link.classList.contains("navbar__create")) {
        document.querySelector(".header__title").textContent = "Create";
        document.querySelector(".home").classList.add("home--hide");
        document.querySelector(".bookmarked").classList.add("bookmarked--hide");
        document.querySelector(".create").classList.remove("create--hide");
        document.querySelector(".profile").classList.add("profile--hide");
      } else {
        document.querySelector(".header__title").textContent = "Profile";
        document.querySelector(".home").classList.add("home--hide");
        document.querySelector(".bookmarked").classList.add("bookmarked--hide");
        document.querySelector(".create").classList.add("create--hide");
        document.querySelector(".profile").classList.remove("profile--hide");
      }
    });
  });
}
