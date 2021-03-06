import { Reducer } from "react";
import { ADD_PRODUCT, REMOVE_PRODUCT  } from "../types";
import { Product, CartProduct, AllProducts } from '../../../../types';
import { Alert } from "react-native";

interface IProductAction {
    type: string;
    payload: { product: Product };
}

export const InitialState: AllProducts = {
    products: [],
    totalItemCart: 0,
    totalPriceCart: 0,
};

const totalItemCart = (cartProducts: CartProduct[]): number => {
    return cartProducts.length;
};

const totalPriceCart = (cartProducts: CartProduct[]): number => {
    return cartProducts.reduce((acc, product) => {
        return acc + Number(product.price) * Number(product.countCart);
    }, 0);
};

export const GlobalProducts: Reducer<AllProducts, IProductAction> = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            {
                const product = action.payload.product;
                const newCart = [...state.products];
                const productExists = newCart.find(p => p.id === product.id);
                const stock = Number(product.quantity);
                const amount = productExists ? productExists.countCart + 1 : 1;
                if (amount > stock) {
                    Alert.alert(
                        'Ops!', 'Quantidade indisponível no estoque', 
                        [{ text: 'OK' }]
                    );
                    return state;
                }
                if (productExists) {
                    productExists.countCart = amount;
                }else{
                    const newProduct: CartProduct = {
                        ...product,
                        countCart: 1,
                    };
                    newCart.push(newProduct);
                }
                return {
                    ...state,
                    totalItemCart: totalItemCart(newCart),
                    totalPriceCart: totalPriceCart(newCart),
                    products: [...newCart],
                }
            }
        case REMOVE_PRODUCT:
            {
                const product = action.payload.product;
                const newCart = [...state.products];
                const productExists = newCart.find(p => p.id === product.id);
                if (productExists) {
                    const amount = productExists.countCart - 1;
                    if (amount === 0) {
                        newCart.splice(newCart.indexOf(productExists), 1);
                    } else {
                        productExists.countCart = amount;
                    }
                }
                return {
                    ...state,
                    totalItemCart: totalItemCart(newCart),
                    totalPriceCart: totalPriceCart(newCart),
                    products: [...newCart],
                }
            }
        default:
            return state;
    }
}