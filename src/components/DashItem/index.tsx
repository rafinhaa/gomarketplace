import React from 'react';
import AddItemCart from '../AddItemCart';
import DashItem from '../AmountCartButton';

import { 
    Container,
    Title,
    Price,
    Image,
    Header,
    Footer,
    Content,
} from './styles';

interface ProductsProps {  
    id: string,
    title: string,
    price: string,
    image: string,
    quantity: string
}

interface Props {
    product: ProductsProps;
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