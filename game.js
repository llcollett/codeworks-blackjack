
function game() {
    // the game starts by the dealer drawing two cards
    let firstCard = Math.ceil(Math.random() * 11);
    let secondCard = Math.ceil(Math.random() * 11);
    // the total score of the first two cards is calculated
    let score = firstCard + secondCard;
    // score is given
    console.log(score);
    // player is asked to make a decision based on the total score of the two cards
    if (score === 21) {
      console.log("BLACKJACK!");
    }
    else if (score > 21) {
      console.log("BUST");
    }
    else if (score < 21) {
      console.log("Would you like to stick or twist?");
    }
  }
  
  game();
  console.log(4 % 2);

// NEWEST WORKING CODE
// specifications of cards to create a deck
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var ranks = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];
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
// map to names of cards
const game = [];
for (let i = 0; i < deckIndex.length; i++) {
  game.push(deck[shuffledDeck[i]]);
}
console.log(game);