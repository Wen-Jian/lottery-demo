import { combineReducers, createStore } from 'redux';
import reducers from '~/stores/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store =
    process.env.NODE_ENV === 'production'
        ? createStore(combineReducers(reducers))
        : createStore(combineReducers(reducers), composeWithDevTools());

export default store;
