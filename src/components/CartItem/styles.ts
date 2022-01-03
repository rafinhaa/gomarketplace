import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({theme}) => theme.colors.shape};
    padding: 16px;
    width: 100%;
    border-radius: 5px;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 14px;
    color: ${({theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.primary};
`;

export const Price = styled.Text`
    font-size: 12px;
    color: ${({theme}) => theme.colors.titleLight};
    font-family: ${({theme}) => theme.fonts.primary};
    margin-bottom: 8px;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: 92px;
    height: 92px;
`;

export const Quantity = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.bold};
`;

export const TextWrapper = styled.View`
    margin-left: 16px;
    justify-content: space-between;
`;

export const CartButtonGroup = styled.View`
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
`;

export const Header = styled.View`
`;

export const Footer = styled.View`

`;