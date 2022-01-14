import React, { useEffect, useState } from 'react';
import { formatValue } from '../../utils';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppRoutesParamList, IRootStore } from '../../types';

type FloatingCartNavigationProp = StackNavigationProp<AppRoutesParamList, 'Cart'>;

import { 
    Button,
    Container, 
    Icon,
    TextButton,
    TextAmount
} from './styles';

const FloatingCart: React.FC = () => {
    const navigation = useNavigation<FloatingCartNavigationProp>();
    const { totalItemCart, totalPriceCart } = useSelector(
        (state: IRootStore) => state.GlobalProducts
    );
    const [formattedPrice, setFormattedPrice] = useState('R$ 0,00');
    const [formattedAmount, setFormattedAmount] = useState('Carrinho vazio');

    useEffect(() => {   
        const formattedValue = formatValue(totalPriceCart)     
        setFormattedPrice(formattedValue);
    }, [totalPriceCart]);

    useEffect(() => {
        setFormattedAmount(
            `${totalItemCart} ${totalItemCart > 1 ? 'itens' : 'item'}`
        );
    }, [totalItemCart]);


    return (
        <Container>
            <Button 
                onPress={() => navigation.navigate('Cart')}
            >
                <Icon name="ShoppingCart" />
                <TextButton>{formattedAmount}</TextButton>
            </Button>
            <TextAmount>{formattedPrice}</TextAmount>
        </Container>
    );
}

export default FloatingCart;