import { Card } from "./classes/Card.js";
import { Deck } from "./classes/Deck.js";
import { Player } from "./classes/Player.js";
import { Croupier } from "./classes/Croupier.js";

const checkWhoWin = (playersCount, croupiersCount) => {
	if (
		(playersCount === 21 && croupiersCount === 21) ||
		(playersCount > 21 && croupiersCount > 21) ||
		playersCount === croupiersCount
	) {
		console.log("Ничья");
	} else if (
		(playersCount < 22 && croupiersCount > 21) ||
		(playersCount < 22 && croupiersCount < 22 && playersCount > croupiersCount)
	) {
		console.log("Вы выиграли");
	} else console.log("Вы проиграли");
};

let deck = new Deck();

deck.mix();

let p = new Player();
let c = new Croupier();

p.hand.push(deck.getCart());
p.hand.push(deck.getCart());
p.checkCount();
console.log(p.hand);

c.hand.push(deck.getCart());
c.hand.push(deck.getCart());
c.checkCount();

p.show();
c.show();

while (p.count !== 21 && p.count < 22) {
	if (confirm("GO?")) {
		p.hand.push(deck.getCart());
		p.checkCount();
		p.show();
		c.show();
	} else break;
}

c.endGame(deck);

console.log("---------------");

p.show();
c.show(true);

checkWhoWin(p.count, c.count);
