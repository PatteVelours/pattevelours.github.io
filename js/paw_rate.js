
// get all the cat ratings
let cat_ratings = document.getElementsByClassName("cat-rating");

// create a chat object for each cat
const hermione = {
  rates : [4,4,2,1],  // number of paws to grey out in order
  cat_ratings_index: 0,  // index of the cat rating in the cat_ratings array
};

const praline = {
  rates : [4,3,2,2],
  cat_ratings_index: 1,
}

const aslan = {
  rates : [4,3,4,2],
  cat_ratings_index : 2,
}

const sherlock = {
  rates: [3,4,1,5],
  cat_ratings_index: 3,
}

const quiquinette = {
  rates: [5,4,3,2],
  cat_ratings_index: 4,
}

const gribouille = {
  rates: [1,2,3,2],
  cat_ratings_index: 5,
}

const nhouvel = {
  rates: [3,1,5,1],
  cat_ratings_index: 6,
}

const nolly = {
  rates: [3,4,3,2],
  cat_ratings_index: 7,
}

const snickers = {
  rates: [3,2,3,1],
  cat_ratings_index: 8,
}

const snowbelle = {
  rates: [5,1,5,1],
  cat_ratings_index: 9,
}

const thor = {
  rates: [3,2,5,1],
  cat_ratings_index: 10,
}

// add all the chats to an array
let chats = [
  hermione,
  praline,
  aslan,
  sherlock,
  quiquinette,
  gribouille,
  nhouvel,
  nolly,
  snickers,
  snowbelle,
  thor,

];

// loop through all the chats
for (let chat of chats) {

  // get the paw rate of the current cat
  let rating = cat_ratings[chat.cat_ratings_index];
  let paw_rates = rating.getElementsByClassName("paw-rate");

  // loop through all the paw rates
  for (let i = 0; i < paw_rates.length; i++) {

    // get the current paw rate
    let paw_rate = paw_rates[i]

    // loop through all the paws to grey out
    for (let j = paw_rate.children.length; j > chat.rates[i]; j--) {

      // get the current paw
      let paw = paw_rate.children[j-1];

      // toggle the greyed-paw class
      paw.classList.toggle("greyed-paw");

    }
  }
}
