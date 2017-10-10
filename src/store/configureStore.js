import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './../reducers';
import invariant from 'redux-immutable-state-invariant';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';


const logger = createLogger({ collapsed: true, diff: true });

const storeEnhancers = [];
storeEnhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f);


const finalCreateStore = compose(
  applyMiddleware(invariant(), thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
