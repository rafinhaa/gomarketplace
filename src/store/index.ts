import { createStore, combineReducers } from 'redux';
import { GlobalProducts } from './modules/products/reducers';
import { AllProducts } from './modules/products/types';

export interface IRootStore {
    GlobalProducts: AllProducts
};

const combineStore = combineReducers({
    GlobalProducts
});

const store = createStore(combineStore);

export default store;