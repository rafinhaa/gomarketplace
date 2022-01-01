import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Button,
    Icon
} from './styles';

interface Props extends TouchableOpacityProps {
    type: 'plus' | 'minus';
}

const AmountCartButton: React.FC<Props> = ({
    type,
    ...rest
}) => {
    return (
        <Button {...rest} >
            <Icon type={type}  />
        </Button>
    );
}

export default AmountCartButton;