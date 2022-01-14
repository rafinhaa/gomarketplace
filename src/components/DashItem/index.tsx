import React from 'react';
import AddItemCart from '../AddItemCart';
import { Product } from '../../types';
import { formatValue } from '../../utils';

import { 
    Container,
    Title,
    Price,
    Image,
    Header,
    Footer,
    Content,
} from './styles';

interface Props {
    product: Product;
    handleAddProductCart: (id: string) => void;
}

const CartItem: React.FC<Props> = ({
    product,
    handleAddProductCart,
}) => {
  return (
    <Container>
        <Image source={{ uri: product.image }} />
        <Content>
            <Header>
                <Title>{product.title}</Title>
            </Header>
            <Footer>
                <Price>{formatValue(product.price)}</Price>
                <AddItemCart
                    onPress={() => handleAddProductCart(product.id)}
                />
            </Footer>
        </Content>
    </Container>
  );
}

export default CartItem;

function formattedValue(price: string): React.ReactNode {
    throw new Error('Function not implemented.');
}
