import { Card } from "./Card";

describe("Function getValue in class Cart", () => {
	test("Check for 4♠", () => {
		let card = new Card("4", "♠");
		expect(card.getValue()).toBe(4);
	});

	test("Check for A♠", () => {
		let card = new Card("A", "♠");
		expect(card.getValue()).toBe(1);
	});

	test("Check for Q♠", () => {
		let card = new Card("Q", "♠");
		expect(card.getValue()).toBe(10);
	});
});

describe("Function convertCard in class Card", () => {
	test("Check for 4♠", () => {
		let card = new Card("4", "♠");
		expect(card.convertCart()).toBe("4♠ ");
	});

	test("Check for A♠", () => {
		let card = new Card("A", "♠");
		expect(card.convertCart()).toBe("A♠ ");
	});

	test("Check for Q♠", () => {
		let card = new Card("Q", "♠");
		expect(card.convertCart()).toBe("Q♠ ");
	});
});
