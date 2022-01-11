import React from 'react';
import Config from 'react-native-config';
import { ThemeProvider } from 'styled-components/native';
import StorybookUI from './storybook'
import theme  from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/app.routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const Storybook: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StorybookUI/>
    </ThemeProvider>
  );
}

export default Config.LOAD_STORYBOOK === 'true' ? Storybook : App