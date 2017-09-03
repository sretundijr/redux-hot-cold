
import {
  NEW_GAME,
  newGame,
  MAKE_GUESS,
  makeGuess,
  TOGGLE_INFO_MODAL,
  toggleInfoModal
} from './actions';

describe('newGame', () => {
  it('should return the action', () => {
    const action = newGame();
    expect(action.type).toEqual(NEW_GAME);
    expect(action.correctAnswer).toBeLessThan(101);
    // expect(action.correctAnswer).toBeTruthy(Number);
  });
});

describe('MAKE_GUESS', () => {
  it('should return an action', () => {
    const guess = 7;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});

describe('toggle info modal', () => {
  it('should return the correct action', () => {
    const action = toggleInfoModal();
    expect(action.type).toEqual(TOGGLE_INFO_MODAL);
  });
});