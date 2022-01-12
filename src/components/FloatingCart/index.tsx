import React from 'react';

import { 
    Button,
    Container, 
    Icon,
    TextButton,
    TextAmount
} from './styles';

const FloatingCart: React.FC = () => {
    return (
        <Container>
            <Button>
                <Icon name="ShoppingCart" />
                <TextButton>16 itens</TextButton>
            </Button>
            <TextAmount>R$ 5.597,00</TextAmount>
        </Container>
    );
}

export default FloatingCart;