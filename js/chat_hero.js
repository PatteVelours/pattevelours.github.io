
const hero_container = document.getElementById("hero_container");
const hero_img = document.getElementById("hero_img");
const cat_imgs = document.querySelectorAll(".cat-misc > aside > img");
const close_btn = document.getElementById("hero_close");


function hero_open(src) {
    hero_container.classList.add("hero_open");
    hero_img.src = src;
}

function hero_close() {
    hero_container.classList.remove("hero_open");
}

for (let img of cat_imgs) {
  img.addEventListener("click", function() {
    let src = this.src;
    hero_open(src);
  });
}

hero_container.addEventListener("click", hero_close)

close_btn.addEventListener("click", hero_close)

hero_img.addEventListener("click", (e) => e.stopPropagation());
