import styled from "styled-components/native";
import Feather from '../Icon';

export const HeaderWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Text = styled.Text`
    font-size: 22px;
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.title};
`;

export const TextBold = styled.Text`
    font-size: 22px;
    font-family: ${props => props.theme.fonts.bold};
    color: ${props => props.theme.colors.title};
`;


export const Logo = styled(Feather).attrs( props => ({
    name: 'ShoppingBag',
    width: 32,
    height: 32,
    color: props.theme.colors.primary,
}))`
    margin-right: 15px;
`;