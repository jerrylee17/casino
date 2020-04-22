const prompt = require('prompt-sync')();

// 1-13: spades, 14-26: hearts, 27-39: clubs, 40-52: diamonds
var cards = [...Array(52).keys()].map(x => x + 1)
var dealerHand = []
var playerHand = []

function shuffle() {
    cards.sort(() => Math.random() - 0.5);
}

function initDeal() {
    for (let i = 0; i < 2; i++) {
        dealerHand.push(cards.shift())
        playerHand.push(cards.shift())
    }
}

function hit(hand) {
    hand.push(cards.shift())
}

function getHandValue(hand) {
    let hlow = 0;
    let hhigh = 0;
    for (let i = 0; i < hand.length; i++) {
        let value = hand[i] % 13;
        if (value == 1) {
            hlow += 1;
            hhigh += 11;
        } else if (value == 0 || value >= 10) {
            hlow += 10;
            hhigh += 10;
        } else {
            hlow += value;
            hhigh += value;
        }
        if (hhigh > 21 && hlow < 21) {
            hhigh = hlow;
        }
    }
    return [hlow, hhigh];
}

function playDealer(hand) {
    for (let i = 0; i < cards.length; i++) {
        const [hlow, hhigh] = getHandValue(hand);
        if (hhigh < 17) {
            hit(hand)
        } else if (hlow > 17) {
            return
        } else if (hlow < 17 && hhigh > 17) {
            if (hhigh > 20) {
                return
            }
            hit(hand)
        }
    }
}

function checkBust(hand) {
    const [hlow, hhigh] = getHandValue(hand);
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
function determineWinner(dealer, player){
    const [dlow, dhigh] = getHandValue(dealer);
    const [plow, phigh] = getHandValue(player);
    const pbust = checkBust(player);
    const dbust = checkBust(dealer);
    if (pbust && dbust){
        return 1
    } else if (pbust) {
        return 0
    } else if (dbust) { 
        return 2
    } else if (phigh > dhigh){
        return 2
    } else if (phigh == dhigh) {
        return 1
    }else {
        return 0
    }
}

function play() {
    while (true) {
        const [hlow, hhigh] = getHandValue(playerHand);
        console.log(hlow, hhigh)
        const name = prompt('Hit? ');
        if (name == 'n') {
            console.log(playerHand);
            break
        } else {
            hit(playerHand)
        }
        console.log(playerHand)
        if (checkBust(playerHand)) {
            const [hlow, hhigh] = getHandValue(playerHand);
            console.log(hlow, hhigh)
            console.log('U busted');
            break
        }
    }
}

shuffle()
initDeal()
console.log(playerHand)
play()

console.log('=================')
playDealer(dealerHand)
console.log(dealerHand)
const [hlow, hhigh] = getHandValue(dealerHand);
console.log(hlow, hhigh)
console.log('========WINNER========')
const val = determineWinner(dealerHand, playerHand)
console.log(val);
