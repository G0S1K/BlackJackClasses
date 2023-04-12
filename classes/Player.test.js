import { Player } from "./Player";
import { Card } from "./Card";

describe("Testing class Player", () => {
	test("Check function checkCount with 4♠ 10♠", () => {
		let player = new Player();
		player.hand.push(new Card("4", "♠"));
		player.hand.push(new Card("10", "♠"));
        player.checkCount();
        expect(player.count).toBe(14);
	});

	test("Check function checkCount with 2♠ 3♠ A♠", () => {
		let player = new Player();
		player.hand.push(new Card("2", "♠"));
		player.hand.push(new Card("3", "♠"));
        player.hand.push(new Card("A", "♠"));
        player.checkCount();
        expect(player.count).toBe(16);
	});

	test("Check function checkCount with K♠ K♠ A♠", () => {
		let player = new Player();
		player.hand.push(new Card("K", "♠"));
		player.hand.push(new Card("K", "♠"));
        player.hand.push(new Card("A", "♠"));
        player.checkCount();
        expect(player.count).toBe(21);
	});
});
