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
	desk = [];

	constructor() {
		this.#fillDesk();
	}

	#fillDesk() {
		this.suits.forEach((item) => {
			this.cards.forEach((card) => {
				this.desk.push(new Card(card, item));
			});
		});
	}

	mix() {
		this.desk.sort(() => Math.random() - 0.5);
	}
}

class Player {
	playersHand = [];
	playersCount = 0;

	cartInHand(desk) {
		let cartIndex = randomIntFromInterval(1, desk.length) - 1;
		this.playersHand.push(desk[cartIndex]);
		desk.splice(cartIndex, 1);
	}

	checkCount() {
		let aceCount = 0;
		let countWithAce = 0;
		let points = 0;
		this.playersHand.forEach((cart) => {
			if (cart.value === "A") aceCount++;
			points += +cart.getValue();
		});
		this.playersCount = points;
		if (aceCount != 0) countWithAce = this.playersCount + aceCount * 10;

		if (countWithAce < 22 && countWithAce > 0) this.playersCount = countWithAce;
	}

	show() {
		let str = "";
		this.playersHand.forEach((cart) => {
			str += cart.value + cart.suit + " ";
		});
		console.log("Players hand: " + str);
		console.log("Players count: " + this.playersCount);
	}
}

class Croupier {
	croupiersHand = [];
	croupiersCount = 0;

	cartInHand(desk) {
		let cartIndex = randomIntFromInterval(1, desk.length) - 1;
		this.croupiersHand.push(desk[cartIndex]);
		desk.splice(cartIndex, 1);
	}
	endGame(desk) {
		this.checkCount();
		while (true) {
			if (
				this.croupiersCount !== 17 &&
				this.croupiersCount < 22 &&
				this.croupiersCount < 17
			) {
				this.cartInHand(desk);
				this.checkCount();
			} else break;
		}
	}

	checkCount() {
		let aceCount = 0;
		let countWithAce = 0;
		let points = 0;
		this.croupiersHand.forEach((cart) => {
			if (cart.value === "A") aceCount++;
			points += +cart.getValue();
		});
		this.croupiersCount = points;
		if (aceCount != 0) countWithAce = this.croupiersCount + aceCount * 10;

		if (countWithAce < 22 && countWithAce > 0)
			this.croupiersCount = countWithAce;
	}

	show() {
		let str = "";
		this.croupiersHand.forEach((cart) => {
			str += cart.value + cart.suit + " ";
		});
		console.log("Croupiers hand: " + str);
		console.log("Croupiers count: " + this.croupiersCount);
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

p.cartInHand(desk.desk);
p.cartInHand(desk.desk);
p.checkCount();

c.cartInHand(desk.desk);
c.cartInHand(desk.desk);
c.checkCount();

p.show();
c.show();

while (confirm("GO?")) {
	p.cartInHand(desk.desk);
	p.checkCount();
	p.show();
	c.show();
}

c.endGame(desk.desk);

p.show();
c.show();

checkWhoWin(p.playersCount, c.croupiersCount);
