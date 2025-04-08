export type Card = {
	ratio: number;
	color: [number, number, number];
};

class DummyCardSource {
	static #singleton: DummyCardSource;

	cards: Array<Card>;
	private constructor() {
		this.cards = [];
		for (let i = 0; i < 30; i++) {
			this.cards.push({
				ratio: Math.max(Math.random() * 2, 0.6),
				color: [
					Math.floor(Math.random() * 256),
					Math.floor(Math.random() * 256),
					Math.floor(Math.random() * 256),
				],
			});
		}
	}

	public static get instance() {
		if (!DummyCardSource.#singleton) {
			DummyCardSource.#singleton = new DummyCardSource();
		}

		return DummyCardSource.#singleton;
	}
}

export default DummyCardSource;
