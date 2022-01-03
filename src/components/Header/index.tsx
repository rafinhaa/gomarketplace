import React from 'react';

import { 
    HeaderWrapper,
    Text,
    TextBold,
    Logo
} from './styles';

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <Logo />
            <Text>Go</Text>
            <TextBold>Marketplace</TextBold>
        </HeaderWrapper>
    );
}

export default Header;