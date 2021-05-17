import { combineReducers, createStore } from 'redux';
import reducers from '~/stores/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers(reducers), composeWithDevTools());

export default store;
