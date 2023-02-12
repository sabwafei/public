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
  const mobileNavMenu = document.getElementById("mobile-links");
  const content = document.getElementById("content");
  const navBlocker = document.getElementById("blocker");
  navBlocker.style.display = "none";

  //event listeners
  menuToggle.addEventListener("click", () => {
    if (menuToggle.getAttribute("data-state") == "closed") {
      mobileNavMenu.style.display = "flex";
      menuToggle.querySelector("*:first-child").src = "/images/cross.png";
      menuToggle.setAttribute("data-state", "open");
      navBlocker.style.display = "block";
      window.removeEventListener("click", (e) => {
        if (e.target == content) {
          e.preventDefault();
        }
      });
    } else if (menuToggle.getAttribute("data-state") == "open") {
      mobileNavMenu.style.display = "none";
      menuToggle.querySelector("*:first-child").src = "/images/hamburger.png";
      menuToggle.setAttribute("data-state", "closed");
      window.addEventListener("click", (e) => {
        if (e.tartget == content) {
          e.preventDefault();
        }
      });
      navBlocker.style.display = "none";
    }
  });

  //functions
})();
