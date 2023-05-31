
// get all the cat ratings
let cat_ratings = document.getElementsByClassName("cat-rating");

// create a chat object for each cat
let hermione = {
  rates : [3,4,2,5],  // number of paws to grey out in order
  cat_ratings_index: 0,  // index of the cat rating in the cat_ratings array
};

// add all the chats to an array
// TODO: add more chats ############################
let chats = [
  hermione,
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
