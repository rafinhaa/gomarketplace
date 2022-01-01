import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Feather from '../Icon';

interface IconProps {
    type: 'plus' | 'minus';
}

export const Button = styled(TouchableOpacity)`
    width: 40px;
    height: 40px;
    background: rgba(232, 63, 91, 0.1);
    border-radius: 5px;
    padding: 12px;
    align-items: center;
    justify-content: center;
`;
export const Icon = styled(Feather).attrs<IconProps>( props => ({
    name: props.type === 'plus' ? 'Plus' : 'Minus',
    width: props.width || 16,
    height: props.height || 16,
    color: props.theme.colors.primary,
    activityOpacity: 0.7,
}))<IconProps>`
`;

