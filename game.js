
// create game
function Game() {
  this.hand = [];
  this.score = 0;
  this.drawId = 0;
  this.maxCards = 5;
  // deck stuff
  this.suits = ['clubs', 'diamonds', 'hearts', 'spades'];
	this.ranks = ['ace','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
  this.deckIndex = [];
  this.deckShuffled = [];
  this.names = [];
  this.deck = [];
  this.deckScores = [];
}

Game.prototype.play = function() {
  // shuffle deck
  this.shuffleDeckToStart();
  // dealer draws two cards
  this.dealerDraw();
  if (this.blackjack()) {}
  else {
    
  }
}

Game.prototype.createDeck = function() {
  // indexes
  for (let i = 0; i < this.suits.length * this.ranks.length; i++) {
    this.deckIndex.push(i);
  }
  return this.deckIndex;
}

Game.prototype.shuffle = function() {
  let max = this.deckIndex.length - 1;
  while(max >= 0) this.deckShuffled.push(max--)
    this.deckShuffled.sort(function () {
      return 0.5 - Math.random()
    });
  return this.deckShuffled;
}

Game.prototype.createNames = function() {
  // names
  for (let i = 0; i < this.suits.length; i++) {
    for (let j = 0; j < this.ranks.length; j++) {
      this.names.push(this.ranks[j] + ' of ' + this.suits[i]);
    }
  }
  return this.names;
}

Game.prototype.deckNames = function() {
  for (let i = 0; i < this.deckShuffled.length; i++) {
    this.deck.push(this.names[this.deckShuffled[i]]);
  }
  return this.deck;
}

Game.prototype.deckScores = function() { 
  for (let i = 0; i < this.scores.length; i++) {
    this.scores[i] = (this.scores[i] % 13) + 1;
    if (this.scores[i] > 10) {
      this.scores[i] = 10;
    }
    else if (this.scores[i] === 1) {
      this.scores[i] = 11;
    }
  }
  return this.scores;
}

Game.prototype.shuffleDeckToStart = function() {
  this.createDeck();
  this.shuffle();
  this.createNames();
  this.deckNames();
  this.scores = this.deckShuffled.slice();
  this.deckScores();
}

Game.prototype.dealerDraw = function() {
  for (let id = 0; id < 2; id++) {
    this.score += this.deckScores[id];
    this.hand.push(this.deckNames[id]);
  }
}

Game.prototype.twist = function() {
  
}

Game.prototype.stick = function() {
  return this.score;
}

Game.prototype.stickOrTwist = function(choice) {
  
}

Game.prototype.incrementDraw = function (set) {
  this.drawId += set;
};

Game.prototype.incrementScore = function (set) {
  this.score += set;
};


Game.prototype.blackjack = function() {
  return this.score === 21;
}

Game.prototype.bust = function() {
  return this.score > 21;
}


// tests
//let hand = [];
//for (let i = 0; i < 2; i++) {
//  hand.push(deck[i]);
//}
//console.log(deck[0]);
//console.log(deck[1]);
//console.log(hand);