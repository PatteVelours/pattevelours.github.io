
let menu_arts = Array.prototype.slice.call(document.getElementsByClassName('menu-art'));
let carte_nav = Array.prototype.slice.call(document.getElementsByClassName('menu-goto'));
let carte_nav_element = document.getElementById('carte-nav');
let pre_carte_nav_element = document.getElementById('pre-carte-nav');

function addMostProminentElementClass(className, targetClass) {
  const elements = document.getElementsByClassName(className);
  let maxPercentage = 0;
  let mostProminentElement = null;

  for (var i = 0; i < elements.length; i++) {
    const element = elements[i];
    const rect = element.getBoundingClientRect();
    const visibilityPercentage = calculateVisibilityPercentage(rect);

    if (visibilityPercentage > maxPercentage) {
      maxPercentage = visibilityPercentage;
      mostProminentElement = element;
    }
  }

  // Remove the class from all elements with the target class
  const elementsWithTargetClass = document.getElementsByClassName(targetClass);
  for (let j = 0; j < elementsWithTargetClass.length; j++) {
    elementsWithTargetClass[j].classList.remove(targetClass);
  }

  // Add the class to the most prominent element, if found
  if (mostProminentElement) {

    let index = menu_arts.indexOf(mostProminentElement);
    let carte_nav_element = carte_nav[index];

    carte_nav_element.classList.add(targetClass);
  }
}

function calculateVisibilityPercentage(rect) {
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
  const visibleWidth = Math.max(0, Math.min(rect.right, windowWidth) - Math.max(rect.left, 0));

  return (visibleHeight * visibleWidth) / (rect.width * rect.height) * 100;
}


function toggle_carte_nav() {

  carte_nav_element.classList.toggle('carte-nav-active');
  pre_carte_nav_element.classList.toggle('carte-nav-active');
}

window.addEventListener('scroll', function() {
  addMostProminentElementClass('menu-art', 'current-menu-item');
});
window.addEventListener('load', function() {
  addMostProminentElementClass('menu-art', 'current-menu-item');
});

if (window.matchMedia("(max-width: 900px)").matches) {
  pre_carte_nav_element.addEventListener('click', toggle_carte_nav);
  carte_nav_element.addEventListener('click', toggle_carte_nav);

  window.addEventListener('scroll', function() {
    pre_carte_nav_element.classList.remove('carte-nav-active');
    carte_nav_element.classList.remove('carte-nav-active');
  });
}


