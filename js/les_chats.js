window.addEventListener("load", function () {
  if (window.location.hash !== "" && window.location.hash !== "#") {
    const hash = window.location.hash.substring(1);
    const chat = document.getElementById(hash);

    if (chat != null) {
      window.scrollTo(0, chat.offsetTop - 150)
    }
  }
});
