import { Croupier } from "./Croupier";
import { Card } from "./Card";
import { Deck } from "./Deck";

describe("Testing class Croupier", () => {
	let deck = new Deck();
	deck.mix();
	let croupier;

	beforeEach(() => {
		croupier = new Croupier();
	});

	test("check function endgame for 17 points", () => {
		croupier.hand.push(new Card("10", "♠"));
		croupier.hand.push(new Card("7", "♠"));
		croupier.endGame(deck);
		expect(croupier.count).toBe(17);
	});

	test("check function endgame for more than 17 ", () => {
		croupier.hand.push(new Card("K", "♠"));
		croupier.hand.push(new Card("K", "♠"));
		croupier.endGame(deck);
		expect(croupier.count).toBe(20);
	});
});
