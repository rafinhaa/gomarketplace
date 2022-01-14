import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";


export const LoadContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoadIndicator = styled(ActivityIndicator).attrs(
    ({color, size, theme}) => ({
        color: color ? color : theme.colors.primary,
        size: size ? size : 'small',
    })
)`
`;