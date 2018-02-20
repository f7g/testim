import { expect } from 'chai';

describe('immutability', () => {
	describe('a number', () => {

		function increment(currentState) {
			return currentState + 1;
		}

		it('is immutable', () => {
			let state = 27;
			let nextState = increment(state);

			expect(nextState).to.equal(28);
			expect(state).to.equal(27);
		});

	});
});