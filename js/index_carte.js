
let index_glaces = document.getElementById("index_glaces");
let current_month = new Date().getMonth();

console.log(current_month);

window.addEventListener("load", function () {
  // if we are not in summer, we hide the ice cream section
  if (!(current_month >= 4 && current_month <= 8)) {
    index_glaces.style.display = "none";
  }
})
