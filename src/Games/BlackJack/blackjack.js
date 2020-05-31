const prompt = require('prompt-sync')();

export class BlackJackGame {
  // 1-13: spades, 14-26: hearts, 27-39: clubs, 40-52: diamonds
  constructor() {
    this.cards = [...Array(52).keys()].map(x => x + 1);
    this.dealerHand = [];
    this.playerHand = [];
    this.revealDealer = false;
  }

  reset() {
    this.cards = [...Array(52).keys()].map(x => x + 1);
    this.dealerHand = [];
    this.playerHand = [];
    this.revealDealer = false;
  }

  shuffle() {
    this.cards.sort(() => Math.random() - 0.5);
  }

  initDeal() {
    for (let i = 0; i < 2; i++) {
      this.dealerHand.push(this.cards.shift());
      this.playerHand.push(this.cards.shift());
    }
  }

  hit(hand = this.playerHand) {
    hand.push(this.cards.shift());
  }

  getHandValue(hand) {
    let hlow = 0;
    let hhigh = 0;
    for (let i = 0; i < hand.length; i++) {
      let value = hand[i] % 13;
      if (value === 1) {
        hlow += 1;
        hhigh += 11;
      } else if (value === 0 || value >= 10) {
        hlow += 10;
        hhigh += 10;
      } else {
        hlow += value;
        hhigh += value;
      }
      if (hhigh > 21 && hlow <= 21) {
        hhigh -= 10;
      }
    }
    if (hhigh > 21 && hlow <= 21) {
      hhigh -= 10;
    }
    return [hlow, hhigh];
  }

  playDealer(hand = this.dealerHand) {
    this.revealDealer = true;
    for (let i = 0; i < this.cards.length; i++) {
      const [hlow, hhigh] = this.getHandValue(hand);
      if (hhigh < 17) {
        this.hit(hand)
      } else if (hlow > 17) {
        return
      } else if (hlow < 17 && hhigh > 17) {
        if (hhigh > 20) {
          return
        }
        this.hit(hand)
      }
    }
  }

  checkBust(hand = this.playerHand) {
    const [hlow,] = this.getHandValue(hand);
    if (hlow > 21) {
      return true
    }
    return false
  }

  /*
  0: player loses
  1: tie
  2: player wins
  */
  determineWinner(dealer = this.dealerHand, player = this.playerHand) {
    const [, dhigh] = this.getHandValue(dealer);
    const [, phigh] = this.getHandValue(player);
    const pbust = this.checkBust(player);
    const dbust = this.checkBust(dealer);
    if (pbust && dbust) {
      return 1
    } else if (pbust) {
      return 0
    } else if (dbust) {
      return 2
    } else if (phigh > dhigh) {
      return 2
    } else if (phigh === dhigh) {
      return 1
    } else {
      return 0
    }
  }

  play() {
    while (true) {
      const [hlow, hhigh] = this.getHandValue(this.playerHand);
      console.log(hlow, hhigh)
      const name = prompt('Hit? ');
      if (name === 'n') {
        console.log(this.playerHand);
        break
      } else {
        this.hit(this.playerHand)
      }
      console.log(this.playerHand)
      if (this.checkBust(this.playerHand)) {
        const [hlow, hhigh] = this.getHandValue(this.playerHand);
        console.log(hlow, hhigh)
        console.log('U busted');
        break
      }
    }
  }
}
