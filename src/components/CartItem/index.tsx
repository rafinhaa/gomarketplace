import React from 'react';
import { Text } from 'react-native';
import AmountCartButton from '../AmountCartButton';

import { 
    Container,
    Title,
    Price,
    Image,
    Quantity,
    TextWrapper,
    CartButtonGroup,
    Header,
    Footer,
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
    onClickAdd: () => void;
    onClickRemove: () => void;
}

const CartItem: React.FC<Props> = ({
    product,
    onClickAdd,
    onClickRemove,
}) => {
  return (
    <Container>
            <Image source={{ uri: product.image }} />
            <TextWrapper>
                <Header>
                    <Title>{product.title}</Title>
                </Header>
                <Footer>
                    <Price>{product.price}</Price>
                    <Quantity>{product.quantity}</Quantity>
                </Footer>
            </TextWrapper>
            <CartButtonGroup>
                <AmountCartButton 
                    type='plus' 
                    onPress={onClickAdd}
                />
                <AmountCartButton 
                    type='minus' 
                    onPress={onClickRemove}
                />
            </CartButtonGroup>
    </Container>
  );
}

export default CartItem;