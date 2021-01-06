import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './weather/reducer';

const reducers = combineReducers({
    weather: weatherReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
