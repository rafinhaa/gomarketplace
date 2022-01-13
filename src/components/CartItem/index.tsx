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
    quantify: string
    countCart: number
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
    const formattedPrice = (price: string) => {
        return Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(Number(price));
    }

    const formattedCountCart = (countCart: number) => {
        const totalItem = Number(product.price) * countCart;
        const formattedTotalItem = Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(totalItem);
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
                    <Price>{formattedPrice(product.price)}</Price>
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