
function index_horaires() {
  let horaires = document.getElementById("current_schedule");
  let current_date = new Date();
  let current_day = current_date.getDay();
  let current_time = current_date.getTime();
  let current_minute = current_date.getMinutes();

  let closing_time = new Date().setHours(18, 30, 0, 0);
  let opening_time = new Date().setHours(11, 30, 0, 0);

  if (current_day === 0 || current_day === 2) {
    horaires.innerHTML = "Fermé, à demain !";
  } else {
    if (current_time < opening_time) {
      horaires.innerHTML = "Ouvert aujourd'hui à 11h30 !";
    } else if (current_time > closing_time) {
      if (current_day === 1) {
        horaires.innerHTML = "Fermé, à mercredi !";
      } else if (current_day === 6) {
        horaires.innerHTML = "Fermé, à lundi !";
      } else {
        horaires.innerHTML = "Fermé, à demain !";
      }
    } else {
      horaires.innerHTML = "Ouvert jusqu'à 18h30 !";
    }
  }
}

window.addEventListener("load", index_horaires);
