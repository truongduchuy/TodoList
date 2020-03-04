import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './redux/reducers';

const logger = createLogger({
  duration: true
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
