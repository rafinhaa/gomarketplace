import React from 'react';
import AddItemCart from '../AddItemCart';
import { Product } from '../../types';

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
                <Price>{product.price}</Price>
                <AddItemCart
                    onPress={() => handleAddProductCart(product.id)}
                />
            </Footer>
        </Content>
    </Container>
  );
}

export default CartItem;