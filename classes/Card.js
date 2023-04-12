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

	convertCart = () => `${this.value}${this.suit} `;
}

export { Card };
