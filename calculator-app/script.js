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
  const controls = [...document.getElementById("calculator-controls").children];
  const calcOutput = document.getElementById("calcOutput");
  const backspace = document.getElementById("delete");
  const log = document.getElementById("calculatorLog");
  const clearAll = document.getElementById("clearAll");
  let num = [];
  let num2 = [];
  let container = [];

  //event listeners
  menuToggle.addEventListener("click", () => {
    log.innerText = " ";
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

  controls.forEach((element) => {
    element.addEventListener("click", () => {
      log.innerText = " ";
      if (element.getAttribute("data-func") == "num") {
        calcOutput.value += element.textContent;
        num.push(element.textContent);
        console.log(num);
      }
    });
  });

  backspace.addEventListener("click", () => {
    if (calcOutput.value.length == 0 || calcOutput.value == "") {
      log.innerText = "No value";
    } else {
      calcOutput.value = calcOutput.value.slice(0, -1);
      num = calcOutput.value.split("");
    }
  });

  clearAll.addEventListener("click", () => {
    log.innerText = "";
    calcOutput.value = "";
    num = [];
    num2 = [];
    container = [];
  });

  //functions
})();
