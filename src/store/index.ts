import { createStore, combineReducers } from 'redux';
import { GlobalProducts } from './modules/products/reducers';

const combineStore = combineReducers({
    GlobalProducts
});

const store = createStore(combineStore);

export default store;