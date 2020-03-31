import random


class Card:

    def __init__(self, suit, num):
        self._suit = suit
        self._number = num

    def number(self, number):
        if self.number in ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Queen", "Jack" "King", "Ace"]:
            self._number = number
        else:
            print("Invalid Value")

    def suit(self, suit):
        if self.suit in ["hearts", "clubs", "diamonds", "spades"]:
            self._suit = suit
        else:
            print("Invalid Suit")


class Deck:
    def __init__(self):
        self.cards = []
        self.populate()

    def deck_card_count(self):
        card = 0
        for i in self.cards:
            card = card + 1
        return card

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        return self.cards.pop()

    def populate(self):
        suits = ["clubs", "hearts", "diamonds", "spades"]
        numbers = []
        cards = []
        for i in range(2, 11, 1):
            numbers = str(i) + [" king", " Queen", " Ace", " Jack"]

        for i in suits:
            for j in numbers:
                self.cards = Card(i, j)

    def return_card(self, card):
        if card in self.cards:
            print("Card is already in deck.")
        self.cards.append(card)