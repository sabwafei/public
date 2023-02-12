/*
 * Calculator Web Demo
 *
 *
 * @sabwafei
 * @version 1.0
 */

(function Calculator() {
  //selectors
  const menuToggle = document.getElementById("nav-toggle");
  const mobileLinkMenu = document.getElementById("mobile-links");
  //fuctions

  //event listeners
  menuToggle.addEventListener("click", () => {
    if (menuToggle.getAttribute("data-state") == "open") {
      menuToggle.setAttribute("data-state", "closed");
      mobileLinkMenu.style.display = "none";
      menuToggle.querySelector("*:first-child").src = "/images/hamburger.png";
    } else if (menuToggle.getAttribute("data-state") == "closed") {
      menuToggle.setAttribute("data-state", "open");
      mobileLinkMenu.style.display = "flex";
      menuToggle.querySelector("*:first-child").src = "/images/cross.png";
    }
  });
})();
