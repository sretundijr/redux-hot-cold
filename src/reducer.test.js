
import { newGame, makeGuess, toggleInfoModal } from './actions';
import { guessGameReducer } from './reducer';

describe('guess game reducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = guessGameReducer(undefined, { type: '_UNKNOWN' });
    expect(state.guesses).toEqual([]);
    expect(state.showInfoModal).toEqual(false);
  });

  it('should return the current state when theres an known action', () => {
    const empty = {};
    const state = guessGameReducer({}, { type: 'hello' });
    expect(state).toEqual(empty);
  });

  it('should make a guess', () => {
    const state = guessGameReducer(undefined, makeGuess(5));
    expect(state.guesses[0]).toEqual(5);
  });

  it('should start a new game', () => {
    const state = guessGameReducer(undefined, makeGuess(5));
    expect(state.guesses[0]).toEqual(5);
    const newState = guessGameReducer(state, newGame());
    expect(newState).not.toBe(state);
  });

  it('should toggle the info modal', () => {
    const state = guessGameReducer('', newGame());
    const newState = guessGameReducer(state, toggleInfoModal());
    expect(newState.showInfoModal).toEqual(true);
  });
});