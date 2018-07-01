// create game
function Game() {

  this.card = 0;
  // hand
  this.hand = [];
  this.score = [];
  this.totalScore = 0;

  // dealer hand
  this.dealerHand = [];
  this.dealerScore = [];
  this.dealerTotalScore = 0;

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
  if (this.totalScore === 21) {
    this.blackjack();
  }
  else {
    text=`You have drawn: ${this.hand.join(' and a ')}. Your score is ${this.totalScore}.`
    $('#message').text(text);
    text=`The dealer has drawn: ${this.dealerHand[0]} and an unknown card.`;
    $('#dealer').text(text);
    text=`Hit or stand?`;
    $('#question').text(text);
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

  // player and dealer both dealt two cards
  this.pickACard('user');
  this.pickACard('dealer');
  this.pickACard('user');
  this.pickACard('dealer');

}

// cards are picked at random
Game.prototype.pickACard = function(player) {

  // picks a random card from the remaining deck
  this.card = Math.floor(Math.random() * this.deck.length);
  
  this.incrementHand(player);
  this.incrementScore(player);

}

// cards are added to the player's hand
Game.prototype.incrementHand = function(player) {

  // puts card from deck into hand
  if (player === 'user') {
    this.hand.push(this.deck[this.card]);
    this.deck.splice(this.card,1);
  }
  else if (player === 'dealer') {
    this.dealerHand.push(this.deck[this.card]);
    this.deck.splice(this.card,1);
  }

}

// points are added to the player's score
Game.prototype.incrementScore = function (player) {
  
  if (player === 'user') {
    // increments score without removing from scores so can refer to it later
    this.score.push(this.scores[this.card]);

    // changes value of ace to 1 if score would make the player bust
    if (this.totalScore + this.scores[this.card] > 21) {
      for (let i = 0; i < this.score.length; i++) {
        if (this.score[i] === 11) {
          this.score[i] = 1;
        }
      }
    }
    // removes card score from scores
    this.scores.splice(this.card,1);

    // creates total score
    this.totalScore = this.score.reduce((a, b) => a + b);

  }

  else if (player === 'dealer') {
    
    // increments score without removing from scores so can refer to it later
    this.dealerScore.push(this.scores[this.card]);

    // changes value of ace to 1 if score would make the player bust
    if (this.dealerTotalScore + this.scores[this.card] > 21) {
      for (let i = 0; i < this.dealerScore.length; i++) {
        if (this.dealerScore[i] === 11) {
          this.dealerScore[i] = 1;
        }
      }
    }
    // removes card score from scores
    this.scores.splice(this.card,1);

    // creates total score
    this.dealerTotalScore = this.dealerScore.reduce((a, b) => a + b);
  
  }
}

// hit
Game.prototype.hit = function() {

  let text = "";
  this.pickACard('user');

  // conditionals
  if (this.totalScore === 21) {
    this.blackjack();
  }
  else if (this.totalScore > 21) {
    this.bust();
  }
  else {
    // game text
    text = `You have drawn: ${this.hand.join(' and a ')}. Your score is ${this.totalScore}.`;
    $('#message').text(text);
  }
  
}

// stand
Game.prototype.stand = function() {

  // reset text
  $('#question').text("");
  // dealer plays
  this.dealerPlay();

  if (this.dealerTotalScore === 21) {
    text = "Dealer gets blackjack!";
  } 
  else if (this.dealerTotalScore < 21 && 
      this.totalScore < this.dealerTotalScore) {
        text = "Unfortunately, you lose!";
  }
  else {
    text = "Congratulations! You win!"
  }
  $('#stand').text(text);

  // button functionality
  $("#stand-button").prop('disabled', true);
  $("#hit-button").prop('disabled', true);

}

Game.prototype.dealerPlay = function() {

  // incorporate tactics where dealer hits until achieves 17 or players score, whichever is greater
  while (this.dealerTotalScore < 17 ||                      this.dealerTotalScore < this.totalScore) {
    this.pickACard('dealer');
  }

  // message text
  text = `The dealer has drawn: ${this.dealerHand.join(' and a ')}. Their score is ${this.dealerTotalScore}.`;
  $('#dealer').text(text);
}

// bust
Game.prototype.bust = function() {

  // reset text
  $('#dealer').text("");
  $('#question').text("");
  // game text
  let text = `You have drawn: ${this.hand.join(' and a ')}. Your score is ${this.totalScore}.`;
  $('#message').text(text);
  text = `BUST!`;
  $('#bust').text(text);

  // button functionality
  $("#stand-button").prop('disabled', true);
  $("#hit-button").prop('disabled', true);

}

// blackjack
Game.prototype.blackjack = function() {

  // reset text
  $('#dealer').text("");
  $('#question').text("");
  // game text
  let text = `You have drawn: ${this.hand.join(' and a ')}. Your score is ${this.totalScore}.`;
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
  this.score = [];
  this.totalScore = 0;
  this.dealerHand = [];
  this.dealerScore = [];
  this.dealerTotalScore = 0;
  this.card = 0;
  this.deck = [];
  this.scores = [];

  // resets all game text
  $('#bust').text("");
  $('#blackjack').text("");
  $('#stand').text("");
  $('#message').text("");
  $('#dealer').text("");
  $('#question').text("");

  // button functionality
  $("#start-button").prop('disabled', false);
  $("#deal-button").prop('disabled', false);
  $("#hit-button").prop('disabled', false);
  $("#stand-button").prop('disabled', false);

}