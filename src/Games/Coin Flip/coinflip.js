// Creating player with a username and default chips to 50
var player = {
  chips: 50,
};

// Playing coin flip
function play_game(num_of_flips, bet_amt) {
  var flip;
  for (let i = 0; i < num_of_flips; i++) {
    flip = player_flip();
    if (flip < 0.5) {
      console.log("tails");
      player.chips = player.chips - bet_amt;
    } else {
      console.log("heads");
      player.chips = player.chips + bet_amt;
    }
    if (player.chips === 0) {
      console.log("You dont have enough chips!!! Please buy more chips!!!");
      break;
    }
  }
}

// flipping a coin
function player_flip() {
  var flip = Math.random();
  return flip;
}

// Playing coin flip again
function play_again() {
  play_game(num_of_flips, bet_amt);
}
