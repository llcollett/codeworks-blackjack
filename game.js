
// specifications of cards to create a deck
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var ranks = ['ace','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
// indexes of cards and deck
const suitsIndex = [];
const ranksIndex = [];
const deckIndex = [];
// create deck indexes out of suits and ranks
function createDeck() {
  for (let i = 0; i < suits.length; i++) {
    suitsIndex.push(i);
  }
  for (let j = 0; j < ranks.length; j++) {
    ranksIndex.push(j);
  }
  for (let k = 0; k < suits.length * ranks.length; k++) {
    deckIndex.push(k);
  }
}
// create names of cards in deck
const deck = [];
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < ranks.length; j++) {
    deck.push(ranks[j] + ' of ' + suits[i]);
  }
}
// shuffle deck
const shuffledDeck = [];
function shuffleDeck() {
  let max = deckIndex.length - 1;
  while(max >= 0) shuffledDeck.push(max--)
  shuffledDeck.sort(function () {return 0.5 - Math.random()});
  return shuffledDeck;
}
// run functions
createDeck();
shuffleDeck();
//console.log(shuffledDeck);
// create scores from shuffled deck using modular arithmetic
const scores = shuffledDeck.slice();
for (let i = 0; i < scores.length; i++) {
  scores[i] = (scores[i] % 13) + 1;
  if (scores[i] === 1) {
    scores[i] = 11;
  }
  else if (scores[i] > 10) {
    scores[i] = 10;
  }
}
//console.log(shuffledDeck);
//console.log(scores);
// map to names of cards
const game = [];
for (let i = 0; i < deckIndex.length; i++) {
  game.push(deck[shuffledDeck[i]]);
}
//console.log(game);
function drawTwo() {
  console.log("You have drawn a " + game[0] + " and a " + game[1]);
  const drawTwoTotal = scores[0] + scores[1];
  console.log("Your total is: " + drawTwoTotal);
  if (drawTwoTotal === 21 ) {
    console.log("BLACKJACK");
  }
  else if (drawTwoTotal > 21) {
    console.log("BUST");
  }
  else if (drawTwoTotal < 21) {
    console.log("Stick or twist?");
  }
}
function draw1st() {
  console.log("You have drawn a "+ game[2]);
  const draw1stTotal = scores[0] + scores[1] + scores[2];
  console.log("Your total is now: " + draw1stTotal);
  if (draw1stTotal === 21 ) {
    console.log("BLACKJACK");
  }
  else if (draw1stTotal > 21) {
    console.log("BUST");
  }
  else if (draw1stTotal < 21) {
    console.log("Stick or twist?");
  }
}
function player2ndChoice(choice) {
  if (choice.toLowerCase() === 'stick') {
    const finalScore = scores[0] + scores[1];
    console.log("Stick! Your final score is " + finalScore);
  }
  else if (choice.toLowerCase() === 'twist') {
    draw1st();
  }
  else {
    console.log("Please state a valid choice.");
  }
}
function draw2nd() {
  console.log("You have drawn a "+ game[3]);
  const draw2ndTotal = scores[0] + scores[1] + scores[2] + scores[3];
  console.log("Your total is now: " + draw2ndTotal);
  if (draw2ndTotal === 21 ) {
    console.log("BLACKJACK");
  }
  else if (draw2ndTotal > 21) {
    console.log("BUST");
  }
  else if (draw2ndTotal < 21) {
    console.log("Stick or twist?");
  }
}
function player3rdChoice(choice) {
  if (choice.toLowerCase() === 'stick') {
    const finalScore = scores[0] + scores[1] + scores[2];
    console.log("Stick! Your final score is " + finalScore);
  }
  else if (choice.toLowerCase() === 'twist') {
    draw2nd();
  }
  else {
    console.log("Please state a valid choice.");
  }
}

// gameplay
drawTwo();
player2ndChoice('twist');
player3rdChoice('stick');