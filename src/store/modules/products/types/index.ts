export const ADD_PRODUCT = 'ADD_PRODUCT';

export interface Product {  
    id: string,
    title: string,
    price: string,
    image: string,
    quantity: string
}

export interface CartProduct extends Product {
    countCart: number
}

export interface AllProducts {
    products: CartProduct[]
}