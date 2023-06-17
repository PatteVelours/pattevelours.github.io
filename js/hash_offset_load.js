function hash_offset_load() {
  if (window.location.hash !== "" && window.location.hash !== "#") {
    let hash = window.location.hash.substring(1);
    let hashElement = document.getElementById(hash);

    if (hashElement != null) {
      window.scrollTo(0, hashElement.offsetTop - 150)
    }
  }
}

window.addEventListener("load", hash_offset_load);
window.addEventListener("hashchange", hash_offset_load);
window.addEventListener("popstate", hash_offset_load);
window.addEventListener("pushstate", hash_offset_load);
window.addEventListener("replacestate", hash_offset_load);
document.addEventListener("pageshow", hash_offset_load);
