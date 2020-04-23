// const imagePath = '../../Images/Games/Cards/'

class cardHandler {
    constructor(hand) {
        this.hand = hand;
    }

    /*
    return array of card images given the hand
    */
    getCards(imgPath){
        const suitMap = {
            0: 'S',
            1: 'H',
            2: 'C',
            3: 'D'
        }
        let allImages = []
        for (let i = 0; i < this.hand.length; i++){
            let suit = Math.floor(this.hand[i] / 13);
            let number = this.hand[i] % 13;
            if (number === 0){
                number = 13
                suit = suit - 1
            }
            allImages.push(imgPath + String(number) + suitMap[suit]+'.png')
        }
        return allImages
    }
}

module.exports = {cardHandler}

// cards = new cardHandler([1,2,3,13])
// allCards = cards.getCards(imagePath)
// console.log(allCards)
