import { Player } from "./Player.js";

class Croupier extends Player {
	endGame(deck) {
		this.checkCount();
		while (true) {
			if (this.count !== 17 && this.count < 22 && this.count < 17) {
				this.hand.push(deck.getCart());
				this.checkCount();
			} else break;
		}
	}

	show(last) {
		if (!last) {
			console.log(
				"Croupiers hand: " + this.hand[0].value + this.hand[0].suit + " *"
			);
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

export { Croupier };
