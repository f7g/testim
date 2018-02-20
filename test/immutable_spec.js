import { expect } from 'chai';
import { List } from 'immutable';

describe('Immutability', () => {

	describe('A number', () => {

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

	describe('A List', () => {
		
		function addMovie(currentState, movie) {
			return currentState.push(movie);
		}

		it('is immutable', () => {
			let state = List.of('The Dark Knight Rises', 'Memento');
			let nextState = addMovie(state, 'Inception');

			expect(nextState).to.equal(List.of(
				'The Dark Knight Rises', 'Memento', 'Inception'
			));
			expect(state).to.equal(List.of(
				'The Dark Knight Rises', 'Memento'
			));
		});

	});

});