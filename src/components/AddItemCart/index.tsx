import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Button,
    Icon
} from './styles';

const AddItemCart: React.FC<TouchableOpacityProps> = ({
    ...rest
}) => {
    return (
        <Button {...rest} >
            <Icon name='Plus'  />
        </Button>
    );
}

export default AddItemCart;