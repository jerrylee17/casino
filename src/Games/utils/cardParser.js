export class cardHandler {
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
            if (this.hand[i] === 0){
                allImages.push('Purple.png')
                continue
            }
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

