class Card {
    private value: string;
    private suit: string;

    public constructor (value: string, suit: string) {
        this.value = value;
        this.suit = suit;
    }

    toString(): string {
        return(`${this.value}${this.suit}`);
    }

    getValue(): string {
        return this.value;
    }

    getSuit(): string {
        return this.suit;
    }
}

class Deck {
    private cards: Card[];

    public constructor() {
        this.cards = []
        this.create();
        this.shuffle();
    }

    private create() : void {   // le fait de mettre "private" devant la méthode fait qu'elle ne peut pas être utilisée en dehors du constructor
        const suits = ["♠︎", "♣︎", "♡", "♢"];
        const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        for (const suit of suits) {
            for (const value of values) {
                this.cards.push(new Card(value, suit))
            }
        }
    }

    private shuffle() : void {
        for (let i = this.cards.length - 1 ; i > 0 ; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const holder = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = holder;
            // [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
        }
    }

    deal(count : number) : Card[] {
        return this.cards.splice(0, count)
    }

    read(): void {
        this.cards.forEach((card) => {
            console.log(card.toString())
        })
    }
}

class Player {
    name: string;
    private hand: Card[] = [];

    constructor(name: string) {
        this.name = name;
    }

    setCards(cards: Card[]): void {
        cards.forEach((card) => {
            this.hand.push(card); 
//on aurait pu écrire  this.hand.push(...cards), déconstruction du tableau de Card[]
        })
    }

    getHand(): Card[] {
        return this.hand;
    }
}

class Game {
    deck: Deck;
    players: Player[] = [];
    flop: Card[] = [];

    public constructor() {
        this.deck = new Deck();
    }

    addPlayer( player: Player): void {
        this.players.push(player);
    }

    private dealPlayers(): void {
        for (const  player of this.players) {
            player.setCards(this.deck.deal[2])
        }
    }

    private dealFlop(): void {
        this.deck.deal(1);
        this.flop.push(...this.deck.deal(3));
        // this.deck.deal(3).forEach(card => this.flop.push(card))
        this.deck.deal(1);
        this.flop.push(...this.deck.deal(1));
        this.deck.deal(1);
        this.flop.push(...this.deck.deal(1));
    }

    startGame(): void {
        this.dealPlayers();
        this.dealFlop();
    }

    showCards(): void {
        this.players.forEach(player => {
            console.log(`${player.name} : ${player.getHand().join(",")}`)
        });
        console.log(`flop: [${this.flop}]`);
    }

}

const newDeck = new Deck;
const faty = new Player("Faty");
faty.setCards(newDeck.deal(2))
console.log(faty)
const newGame = new Game();
const Ed = newGame.addPlayer(new Player ("Ed"));

