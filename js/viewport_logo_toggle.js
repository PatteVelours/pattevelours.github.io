// This script hides the header logo while the Bigger Logo is in the viewport.
// It is used on the index page.

function isElementInViewport (el) {

    // getBoundingClientRect() returns the size of an element and its position relative to the viewport.
    const rect = el.getBoundingClientRect();

    // returns true if the bottom of the element is more than 100px from the top of the viewport.
    return rect.bottom >= 100;
}

function onVisibilityChange(el, callback) {

    // old_visible is undefined at first, so the callback runs once.
    let old_visible;

    return function () {

        // visible is true if the element is in the viewport.
        const visible = isElementInViewport(el);

        // if the element is in the viewport, and it wasn't before, or vice versa, run the callback.
        if (visible !== old_visible) {
            old_visible = visible;
            callback();
        }
    }
}

// get the element to be observed.
const el = document.getElementById('pt_logo');

// get the element that will be hidden.
const header_logo = document.getElementById('logo_container');

// create a handler function that will be called on load, scroll, and resize.
const handler = onVisibilityChange(el, function () {

    // if the big logo is in the viewport, hide the header logo and vice versa.
    if (isElementInViewport(el)) {
      header_logo.classList.add("hidden");
    } else {
      header_logo.classList.remove("hidden");
    }
});

// add event listeners to run the handler on page load, scroll, and resize.
window.addEventListener('DOMContentLoaded', handler, false);
window.addEventListener('load', handler, false);
window.addEventListener('scroll', handler, false);
window.addEventListener('resize', handler, false);
