
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