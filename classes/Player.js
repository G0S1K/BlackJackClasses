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
			str += cart.convertCart();
		});
		console.log("Players hand: " + str);
		console.log("Players count: " + this.count);
	}
}

export { Player };
