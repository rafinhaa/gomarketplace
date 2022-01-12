import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootStore } from '../../store';

import { 
    Button,
    Container, 
    Icon,
    TextButton,
    TextAmount
} from './styles';

const FloatingCart: React.FC = () => {
    const { totalItemCart, totalPriceCart } = useSelector(
        (state: IRootStore) => state.GlobalProducts
    );
    const [formattedPrice, setFormattedPrice] = useState('R$ 0,00');
    const [formattedAmount, setFormattedAmount] = useState('Carrinho vazio');

    useEffect(() => {        
        setFormattedPrice(
            Intl.NumberFormat('pt-BR', { 
                    style: 'currency',
                    currency: 'BRL' }
                ).format(totalPriceCart)
            );
    }, [totalPriceCart]);

    useEffect(() => {
        setFormattedAmount(
            `${totalItemCart} ${totalItemCart > 1 ? 'itens' : 'item'}`
        );
    }, [totalItemCart]);


    return (
        <Container>
            <Button>
                <Icon name="ShoppingCart" />
                <TextButton>{formattedAmount}</TextButton>
            </Button>
            <TextAmount>{formattedPrice}</TextAmount>
        </Container>
    );
}

export default FloatingCart;