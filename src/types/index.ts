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
    products: CartProduct[],
    totalItemCart: number,
    totalPriceCart: number
}

export interface IRootStore {
    GlobalProducts: AllProducts
};

export type AppRoutesParamList = {
    Dashboard: undefined;
    Cart: undefined;
};