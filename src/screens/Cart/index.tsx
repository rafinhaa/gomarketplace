import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { 
    addProductCart,
    removeProductCart,
} from '../../store/modules/products/actions';
import CartItem from '../../components/CartItem';
import { IRootStore } from '../../types';

import { Container, Flatlist } from './styles';
import FloatingCart from '../../components/FloatingCart';

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(
        (state: IRootStore) => state.GlobalProducts
    );
    return (
        <Container>
            <Flatlist
                data={products}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <CartItem
                        product={item}
                        onClickAdd={() => dispatch(addProductCart(item))}
                        onClickRemove={() => dispatch(removeProductCart(item))}
                    />
                )}
            />
            <FloatingCart />
        </Container>
    );
}

export default Cart;