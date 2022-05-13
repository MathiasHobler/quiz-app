export default function switchSides(navbarlinks) {
  navbarlinks.forEach(function (link) {
    link.addEventListener("click", () => {
      if (link.classList.contains("navbar__home")) {
        document.querySelector(".header__title").textContent = "Quiz App";
      } else if (link.classList.contains("navbar__bookmarked")) {
        document.querySelector(".header__title").textContent = "Bookmarked";
      } else if (link.classList.contains("navbar__create")) {
        document.querySelector(".header__title").textContent = "Create";
      } else {
        document.querySelector(".header__title").textContent = "Profile";
      }
    });
  });

  //   navbarlinks.forEach(link).addEventListener("click", () => {
  //     console.log(link);
  //     // document.querySelector(".home").classList.remove("home--hide");
  //     // document.querySelector(".bookmarked").classList.add("bookmarked--hide");
  //     // document.querySelector(".create").classList.add("create--hide");
  //     // document.querySelector(".profile").classList.add("profile--hide");
  //     // document.querySelector(".header__title").textContent = "Quiz App";
  //   });
}

// document.querySelector(".navbar__home").addEventListener("click", () => {
//   document.querySelector(".home").classList.remove("home--hide");
//   document.querySelector(".bookmarked").classList.add("bookmarked--hide");
//   document.querySelector(".create").classList.add("create--hide");
//   document.querySelector(".profile").classList.add("profile--hide");
//   document.querySelector(".header__title").textContent = "Quiz App";
// });
