
var playerCards = [];
var computerCards = [];
var deck = new Deck();
var discard = [];
var currCard = new Card('none', 0, 0);

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('draw').addEventListener('click', () => {
        draw();
    });
    document.getElementById('new-game').addEventListener('click', () => {
        startGame();
    });

    startGame();
});

/**
 * Start the game
 * 
 */
function startGame() {

    while (true) {
        if (deck[0].number != 8) {
            currCard = deck[0];
            break;
        }
        else
            discard.push(deck.pop());

    }
}

/**
 * Draws a card
 */
function draw() {



}

/** 
 * Plays a card
 * 
*/
function play() {



}

class Card {
    constructor(suit, number, points) {
      this.suit = suit;
      this.number = number;
      this.points = points;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.cards.push(new Card('spades', 1, 1));
        this.cards.push(new Card('hearts', 1, 1));
        this.cards.push(new Card('clubs', 1, 1));
        this.cards.push(new Card('diamonds', 1, 1));
        for (var i = 2; i<=7; i++) {

            this.cards.push(new Card('spades', i, i));
            this.cards.push(new Card('hearts', i, i));
            this.cards.push(new Card('clubs', i, i));
            this.cards.push(new Card('diamonds', i, i));
        
        }
        this.cards.push(new Card('spades', 8, 50));
        this.cards.push(new Card('hearts', 8, 50));
        this.cards.push(new Card('clubs', 8, 50));
        this.cards.push(new Card('diamonds', 8, 50));
        this.cards.push(new Card('spades', 9, 9));
        this.cards.push(new Card('hearts', 9, 9));
        this.cards.push(new Card('clubs', 9, 9));
        this.cards.push(new Card('diamonds', 9, 9));
        this.cards.push(new Card('spades', 10, 10));
        this.cards.push(new Card('hearts', 10, 10));
        this.cards.push(new Card('clubs', 10, 10));
        this.cards.push(new Card('diamonds', 10, 10));
        this.cards.push(new Card('spades', 11, 10));
        this.cards.push(new Card('hearts', 11, 10));
        this.cards.push(new Card('clubs', 11, 10));
        this.cards.push(new Card('diamonds', 11, 10));
        this.cards.push(new Card('spades', 12, 10));
        this.cards.push(new Card('hearts', 12, 10));
        this.cards.push(new Card('clubs', 12, 10));
        this.cards.push(new Card('diamonds', 12, 10));
        this.cards.push(new Card('spades', 13, 10));
        this.cards.push(new Card('hearts', 13, 10));
        this.cards.push(new Card('clubs', 13, 10));
        this.cards.push(new Card('diamonds', 13, 10));
        
        this.shuffle(this.cards);
    }
    
    push(card) { this.cards.push(card); }

    pop() { return this.cards.pop(); }

    shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
    
}