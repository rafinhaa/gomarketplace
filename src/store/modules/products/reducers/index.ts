import { Reducer } from "react";
import { AllProducts, ADD_PRODUCT, Product, CartProduct  } from "../types";

interface IProductAction {
    type: string;
    payload: { product: Product };
}

export const InitialState: AllProducts = {
    products: [],
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
                    console.log(`Quantidade solicitada não disponível no estoque.`);
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
                    products: [...newCart],
                }
            }
        default:
            return state;
    }
}