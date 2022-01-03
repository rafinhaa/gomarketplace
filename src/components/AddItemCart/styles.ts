import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Feather from '../Icon';

export const Button = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
`;
export const Icon = styled(Feather).attrs( props => ({
    width: props.width || 16,
    height: props.height || 16,
    color: props.theme.colors.titleLight,
    activityOpacity: 0.7,
}))`
`;

