
// get the menu button, the icon inside it, the header, logo, and the current page link
let menu_btn = document.getElementById("menu-btn");
let btn_icon = menu_btn.querySelector("span");
let header = document.getElementById("header");
let logo = document.getElementById("logo_container");
let current_page_li = document.getElementById("current_page");

// toggle the menu
function toggleMenu() {
  header.classList.toggle("menu-open");
  logo.classList.toggle("menu-open");

  btn_icon.textContent = (btn_icon.textContent === "menu") ? "close" : "menu";
}

// add event listeners to the menu button
menu_btn.addEventListener(
  "click", function () {
    toggleMenu();
  }
);

// add event listener to the current page link
current_page_li.firstChild.href = "#";
current_page_li.firstChild.addEventListener(
  "click", function () {

    // if the media is a phone, toggle the menu
    let media = window.matchMedia("(max-width: 901px)")
    if (media.matches) {
      toggleMenu();
    }
    return false; // prevent the link from being followed
  }
)
