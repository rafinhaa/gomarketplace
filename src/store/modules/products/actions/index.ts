import { Product, ADD_PRODUCT} from '../types';

export function addProductCart(product: Product) {
    return {
        type: ADD_PRODUCT,
        payload: {
            product
        }
    }
}