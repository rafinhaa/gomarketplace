import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Feather from '../Icon';

export const Container = styled.View`
    flex-direction: row;
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
`;
export const Icon = styled(Feather).attrs( props => ({
    width: 32,
    height: 32,
    color: props.theme.colors.shape,
}))`
    margin-right: 20px;
`;

export const TextButton = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TextAmount = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;