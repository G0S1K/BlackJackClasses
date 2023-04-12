import { Card } from "./Card.js";

class Deck {
	suits = ["♠", "♦", "♣", "♥"];
	cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
	#deck = [];

	constructor() {
		this.#fillDesk();
	}

	#fillDesk() {
		this.suits.forEach((item) => {
			this.cards.forEach((card) => {
				this.#deck.push(new Card(card, item));
			});
		});
	}

	mix() {
		this.#deck.sort(() => Math.random() - 0.5);
	}

	getCart() {
		return this.#deck.pop();
	}
}

export { Deck };
