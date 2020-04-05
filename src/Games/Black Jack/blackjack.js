// Dealer object with default chips to 50
var dealer = {
  cards: [],
  score: 0,
  chips: 50
};

//Player object with default chips to 50
var player = {
  cards: [],
  score: 0,
  chips: 50
};

var deck = [];
// generates a deck of cards
function create_deck() {
  // creates card generator function
  let card = (suit, value, cValue) => {
    //returns key and values into each instance of the this.deck array
    return { suit: suit, value: value, cValue: cValue };
  };

  var values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  var suits = ["Clubs", "Diamonds", "Spades", "Hearts"];

  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      if (values[v] == "A") {
        var cValue = 11;
      } else if (values[v] === "K" || values[v] === "J" || values[v] === "Q") {
        var cValue = 10;
      } else {
        var cValue = parseInt(values[v]);
      }
      deck.push(card(suits[s], values[v], cValue));
    }
  }
  return deck;
}

// shuffle/switch the cards in the deck
function shuffle() {
  for (var i = deck.length - 1; i >= 0; i--) {
    let temp = deck[i];
    let index_rand = Math.floor(Math.random() * deck.length);

    // Making sure that the random index is not the same with the current index
    while (index_rand == i) {
      index_rand = Math.floor(Math.random() * deck.length);
    }
    deck[i] = deck[index_rand];
    deck[index_rand] = temp;
  }
  return deck;
}

// Reseting the game
function reset() {
  player.cards = [];
  player.score = 0;
  dealer.cards = [];
  dealer.score = 0;
  deck.create_deck();
  deck.shuffle();
}

// Dealer's draw
function dealer_hit() {
  newCard = deck.shift();
  dealer.cards.push(newCard);
  dealer.score += newCard.cValue;
}

// Player's draw
function player_hit() {
  newCard = deck.shift();
  player.cards.push(newCard);
  player.score += newCard.cValue;
  evaluate();
}

// Starting a new game with two draws of the player and dealer
function newGame() {
  deck.create_deck();
  deck.shuffle();
  player_hit();
  player_hit();
  dealer_hit();
  dealer_hit();
  evaluate();
}

// If the player doesnt want to draw
function stay() {
  while (dealer.score < 17) {
    dealer_hit();
  }
  evaluate();
}

//Player oriented result
function bet(result) {
  // defaulting the bet amount to 10
  let pBet = 10;
  if (result === "win") {
    player.chips += pBet;
    dealer.chips -= pBet;
  } else {
    player.chips -= pBet;
    dealer.chips += pBet;
  }
}

// Evaluation of the scores and chips
function evaluate() {
  if (player.score === 21) {
    console.log("You won. You have got blackjack!!!");
    bet("win");
    reset();
  } else if (player.score > 21) {
    console.log("You lost. Your score is over 21. The dealer wins!!!");
    bet("Lost");
    reset();
  } else if (dealer.score === 21) {
    console.log("The dealer has got a blackjack. The dealer wins!!!");
    bet("lost");
    reset();
  } else if (dealer.score > 21) {
    console.log("The dealer has gone over 21. You win!!!!");
    bet("lost");
    reset();
  } else if (player.chips === 0) {
    console.log("Game Over. The player has lost all the money");
    reset();
  } else if (dealer.chips === 0) {
    console.log("Game Over. The dealer has lost all the money.");
    reset();
  } else if (
    dealer.score >= 17 &&
    player.score > dealer.score &&
    player.score < 21
  ) {
    console.log("You won. You beat the dealer!!!");
    bet("win");
    reset();
  } else if (
    dealer.score >= 17 &&
    player.score < dealer.score &&
    dealer.score < 21
  ) {
    console.log(
      "You lost. The dealer has got higher score. The dealer wins!!!"
    );
    bet("lost");
    reset();
  } else if (
    dealer.score >= 17 &&
    player.score > dealer.score &&
    player.score < 21
  ) {
    console.log("You won. You beat the dealer!!!");
    bet("win");
    reset();
  } else if (
    dealer.score >= 17 &&
    player.score === dealer.score &&
    dealer.score < 21
  ) {
    console.log("Both have the same score. You tied!!!");
    reset();
  }
}
