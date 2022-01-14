import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutesParamList } from '../types';

const { Navigator, Screen } = createStackNavigator<AppRoutesParamList>();

import Dashboard from '../screens/Dashboard';
import Header from '../components/Header';
import Cart from '../screens/Cart';

import { useTheme } from 'styled-components';

const AppRoutes: React.FC = () => {
    const { colors } = useTheme();    
    return (
        <Navigator
            screenOptions={{
                headerTitle: () => <Header />,
                headerLeftLabelVisible: false,
                headerTintColor: colors.title,
                headerStyle: {
                    backgroundColor: colors.background,

                },
            }}
            initialRouteName="Dashboard"
        >
            <Screen
                name="Dashboard"
                component={Dashboard}
            />
            <Screen
                name="Cart"
                component={Cart}
            />
        </Navigator>
    );
}

export default AppRoutes;