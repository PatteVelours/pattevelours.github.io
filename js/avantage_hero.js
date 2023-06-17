

let asides = document.getElementsByClassName("aside-click");
let dialog = document.getElementById("avantage-dialog");
let dialog_img = dialog.children[0];

for (let aside of asides) {
  aside.addEventListener("click", function () {

    let av_img_src = aside.children[0].getAttribute("src");
    dialog_img.setAttribute("src", av_img_src);

    dialog.showModal();

  });
}

dialog.addEventListener("click", function () {
  dialog.close();
});

dialog_img.addEventListener('click', (event) => event.stopPropagation());
