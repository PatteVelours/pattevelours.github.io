
function index_horaires() {
  let horaires = document.getElementById("current_schedule");
  let current_date = new Date();
  let current_day = current_date.getDay();
  let current_hour = current_date.getHours();
  let current_minute = current_date.getMinutes();

  if (current_day === 0 || current_day === 2) {
    horaires.innerHTML = "Fermé, à demain !";
  } else {
    if (current_hour >= 18 && current_minute > 30 ) {
      horaires.innerHTML = "Fermé, à demain !";
    } else if (current_hour <= 11 && current_minute < 30) {
      horaires.innerHTML = "Ouvert à partir de 11h30, venez nous voir !";
    } else {
      horaires.innerHTML = "Ouvert jusqu'à 18h30, venez nous voir !";
    }
  }
}

window.addEventListener("load", index_horaires);
