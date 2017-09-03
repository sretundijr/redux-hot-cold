import { createStore, applyMiddleware } from 'redux';

import { guessGameReducer } from './reducer';

export default createStore(guessGameReducer);
