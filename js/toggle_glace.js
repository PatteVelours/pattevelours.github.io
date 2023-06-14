function toggle_glace(elementId) {
  let element;
// Get the current month (0-indexed)
  const currentMonth = new Date().getMonth();

  // Check if the current month is between April (index 3) and September (index 8)
  if (currentMonth >= 3 && currentMonth <= 8) {
    // Show the element
    element = document.getElementById(elementId);
    if (element) {
      element.style.display = "block";
    }
  } else {
    // Hide the element
    element = document.getElementById(elementId);
    if (element) {
      element.style.display = "none";
    }
  }
}

window.addEventListener('load', function() {
  toggle_glace('glaces');
  toggle_glace('glaces_nav');
});
