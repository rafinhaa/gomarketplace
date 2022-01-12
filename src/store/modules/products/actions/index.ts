import { Product, ADD_PRODUCT, REMOVE_PRODUCT} from '../types';

export function addProductCart(product: Product) {
    return {
        type: ADD_PRODUCT,
        payload: {
            product
        }
    }
}

export function removeProductCart(product: Product) {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            product
        }
    }
}