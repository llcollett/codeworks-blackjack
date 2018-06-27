// create game
function Game() {

  // hand
  this.hand = [];
  this.includesAce = false;
  this.score = 0;
  this.card = 0;

  // deck
  this.suits = ['clubs', 'diamonds', 'hearts', 'spades'];
	this.ranks = ['ace','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
  this.deck = [];
  this.scores = [];

}

// game play
Game.prototype.play = function() {

  let text = "";
  this.createDeck();
  this.deal();

  // conditionals
  if (this.score > 21) {
    this.bust();
  }
  else if (this.score === 21) {
    this.blackjack();
  }
  else {
    text=`You have drawn: ${this.hand.join(' and a ')}. Your score is ${this.score}. hit or stand?`
    $('#message').text(text);
  }

}

// create the deck
Game.prototype.createDeck = function() {

  // uses suits and ranks to create deck
  for (let i = 0; i < this.suits.length; i++) {
    for (let j = 0; j < this.ranks.length; j++) {
      this.deck.push(this.ranks[j] + " of " + this.suits[i]);
    }
  }
  // uses ranks to create scores for each card
  for (let k = 0; k < this.suits.length * this.ranks.length; k++) {
    this.scores.push((k % 13) + 1);
    if (this.scores[k] > 10) {
      this.scores[k] = 10;
    }
    else if (this.scores[k] === 1) {
      this.scores[k] = 11;
    }
  }
}

// dealer starts the game
Game.prototype.deal = function() {

  // player dealt two cards
  this.pickACard();
  this.pickACard();

}

// cards are picked at random
Game.prototype.pickACard = function() {

  // picks a random card from the remaining deck
  this.card = Math.floor(Math.random() * this.deck.length);
  this.incrementHand();
  this.incrementScore();

}

// cards are added to the player's hand
Game.prototype.incrementHand = function () {

  // puts card from deck into hand
  this.hand.push(this.deck[this.card]);
  this.deck.splice(this.card,1);

}

// points are added to the player's score
Game.prototype.incrementScore = function () {
  
  // increments score
  this.score += this.scores[this.card];
  this.scores.splice(this.card,1);

  // // changes value of ace to 1 if score would make the player bust
  // let subHand = [];
  // for (let i = 0; i < this.hand.length; i++) {
  //   subHand[i] = this.hand[i].substring(0, 3);
  // }
  // this.includesAce = subHand.includes('ace');
  // if (this.score > 21 && this.includesAce) {
  //   this.score = this.score - 10;
  // }
}

// hit
Game.prototype.hit = function() {

  let text = "";
  this.pickACard();

  // conditionals
  if (this.score > 21) {
    this.bust();
  }
  else if (this.score === 21) {
    this.blackjack();
  }
  else {
    // game text
    text = `You have drawn: ${this.hand.join(' and a ')}. Your score is ${this.score}. hit or stand?`;
    $('#message').text(text);
  }
  
}

// stand
Game.prototype.stand = function() {

  // game text
  let text = `You have drawn: ${this.hand.join(' and a ')}. Your score is ${this.score}.`;
  $('#message').text(text);
  let array = ['Good choice!','Not brave enough...','Wise decision!','Oh, gambling...'];
  text = `${array[Math.floor(Math.random() * array.length)]}`;
  $('#stand').text(text);

  // button functionality
  $("#stand-button").prop('disabled', true);
  $("#hit-button").prop('disabled', true);

}

// bust
Game.prototype.bust = function() {

  // game text
  let text = `You have drawn: ${this.hand.join(' and a ')}. Your score is ${this.score}.`;
  $('#message').text(text);
  text = `BUST!`;
  $('#bust').text(text);

  // button functionality
  $("#stand-button").prop('disabled', true);
  $("#hit-button").prop('disabled', true);

}

// blackjack
Game.prototype.blackjack = function() {

  // game text
  let text = `You have drawn: ${this.hand.join(' and a ')}. Your score is ${this.score}.`;
  $('#message').text(text);
  text = `BLACKJACK!`;
  $('#blackjack').text(text);

  // button functionality
  $("#stand-button").prop('disabled', true);
  $("#hit-button").prop('disabled', true);

}

// reset game
Game.prototype.reset = function() {

  // new instance of a game
  game = new Game();

  // resets all aspects of game
  this.hand = [];
  this.includesAce = false;
  this.score = 0;
  this.card = 0;
  this.deck = [];
  this.scores = [];

  // resets all game text
  $('#bust').text("");
  $('#blackjack').text("");
  $('#stand').text("");
  $('#message').text("");

  // button functionality
  $("#start-button").prop('disabled', false);
  $("#deal-button").prop('disabled', false);
  $("#hit-button").prop('disabled', false);
  $("#stand-button").prop('disabled', false);

}