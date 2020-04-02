function card(card, suit, game_value) {
  this.card_number = card;
  this.suit = suit;
  this.game_value = game_value;
}

//initializing deck of cards
var init = function() {
  var suits = ["Hears", "Diamonds", "Clubs", "Spades"],
    card_number = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King"
    ],
    deck = [],
    count = 0;

  function initCards() {
    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < cards.length; j++) {
        deck[count] = new card(cards[j], suits[i]);
        count++;
      }
    }
  }

  function shuffle() {
    var m = deck.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = deck[m];
      deck[m] = deck[i];
      deck[i] = t;
    }
  }

  initCards();

  shuffle();

  return deck;
};
