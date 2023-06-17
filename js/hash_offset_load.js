window.addEventListener("load", function () {
  if (window.location.hash !== "" && window.location.hash !== "#") {
    const hash = window.location.hash.substring(1);
    const hashElement = document.getElementById(hash);

    if (hashElement != null) {
      window.scrollTo(0, hashElement.offsetTop - 150)
    }
  }
});
