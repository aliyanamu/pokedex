import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pokeReducer from './reducers/poke';

const combinedReducers = combineReducers({
  pokeReducer
});

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;
