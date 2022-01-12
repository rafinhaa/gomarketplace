import React from 'react';
import Config from 'react-native-config';
import { ThemeProvider } from 'styled-components/native';
import StorybookUI from './storybook'
import theme  from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/app.routes';
import { Provider } from 'react-redux';
import store from './src/store';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </Provider>
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