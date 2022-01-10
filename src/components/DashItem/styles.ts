import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({theme}) => theme.colors.shape};
    padding: 16px;
    border-radius: 5px;
    width: 156px;
    margin: 8px 8px;
`;

export const Title = styled.Text`
    margin-top: 8px;
    font-size: 14px;
    color: ${({theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.primary};
`;

export const Price = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.bold};
`;

export const Image = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: 122px;
    height: 122px;
`;

export const Header = styled.View`
`;

export const Footer = styled.View`
    margin-top: 8px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Content = styled.View`
`;