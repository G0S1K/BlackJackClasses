function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

class Card {
	constructor(value, suit) {
		this.value = value;
		this.suit = suit;
	}

	show() {
		console.log(this.value, this.suit);
	}

	getValue() {
		if (isNaN(+this.value)) {
			if (this.value === "A") {
				return 1;
			}
			return 10;
		}
		return +this.value;
	}
}

class Desk {
	suits = ["♠", "♦", "♣", "♥"];
	cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
	#desk = [];

	constructor() {
		this.#fillDesk();
	}

	#fillDesk() {
		this.suits.forEach((item) => {
			this.cards.forEach((card) => {
				this.#desk.push(new Card(card, item));
			});
		});
	}

	mix() {
		this.#desk.sort(() => Math.random() - 0.5);
	}

	getCart() {
		return this.#desk.pop();
	}
}

class Player {
	hand = [];
	count = 0;

	checkCount() {
		let aceCount = 0;
		let countWithAce = 0;
		let points = 0;
		this.hand.forEach((cart) => {
			if (cart.value === "A") aceCount++;
			points += +cart.getValue();
		});
		this.count = points;
		if (aceCount != 0) countWithAce = this.count + aceCount * 10;

		if (countWithAce < 22 && countWithAce > 0) this.count = countWithAce;
	}

	show() {
		let str = "";
		this.hand.forEach((cart) => {
			str += cart.value + cart.suit + " ";
		});
		console.log("Players hand: " + str);
		console.log("Players count: " + this.count);
	}
}

class Croupier extends Player{
	endGame(desk) {
		this.checkCount();
		while (true) {
			if (
				this.count !== 17 &&
				this.count < 22 &&
				this.count < 17
			) {
				this.hand.push(desk.getCart());
				this.checkCount();
			} else break;
		}
	}

	show(last) {
		if (this.hand.length === 2 && !last) {
			console.log("Croupiers hand: " + this.hand[0].value + this.hand[0].suit + " *");
		} else {
			let str = "";
			this.hand.forEach((cart) => {
				str += cart.value + cart.suit + " ";
			});
			console.log("Croupiers hand: " + str);
			console.log("Croupiers count: " + this.count);
		}
	}
}

const checkWhoWin = (playersCount, croupiersCount) => {
	if (
		(playersCount === 21 && croupiersCount === 21) ||
		(playersCount > 21 && croupiersCount > 21) ||
		(playersCount === croupiersCount)
	) {
		console.log("Ничья");
	} else if (
		(playersCount < 22 && croupiersCount > 21) ||
		(playersCount < 22 && croupiersCount < 22 && playersCount > croupiersCount)
	) {
		console.log("Вы выиграли");
	} else console.log("Вы проиграли");
};

let desk = new Desk();

desk.mix();


let p = new Player();
let c = new Croupier();

p.hand.push(desk.getCart());
p.hand.push(desk.getCart());
p.checkCount();

c.hand.push(desk.getCart());
c.hand.push(desk.getCart());
c.checkCount();

p.show();
c.show();

while (confirm("GO?")) {
	p.hand.push(desk.getCart());
	p.checkCount();
	p.show();
	c.show();
}

c.endGame(desk);

p.show();
c.show(true);

checkWhoWin(p.count, c.count);

