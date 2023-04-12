import { Deck } from "./Deck";
import { Card } from "./Card";

describe("Testing class Deck", () => {
    test("Check function getCart",() => {
        let deck  = new Deck();
        expect(deck.getCart()).toBeInstanceOf(Card);
    })
})
