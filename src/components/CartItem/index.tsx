import React from 'react';
import { Text } from 'react-native';
import AmountCartButton from '../AmountCartButton';
import { CartProduct } from '../../types';

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
import { formatValue } from '../../utils';

interface Props {
    product: CartProduct;
    onClickAdd: () => void;
    onClickRemove: () => void;
}

const CartItem: React.FC<Props> = ({
    product,
    onClickAdd,
    onClickRemove,
}) => {
    const formattedCountCart = (countCart: number) => {
        const totalItem = Number(product.price) * countCart;
        const formattedTotalItem = formatValue(totalItem);
        return `${countCart}x ${formattedTotalItem}`;
    }

  return (
    <Container>
            <Image source={{ uri: product.image }} />
            <TextWrapper>
                <Header>
                    <Title>{product.title}</Title>
                </Header>
                <Footer>
                    <Price>{formatValue(product.price)}</Price>
                    <Quantity>{formattedCountCart(product.countCart)}</Quantity>
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