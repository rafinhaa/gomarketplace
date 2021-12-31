import React from 'react';
import { Text, View } from 'react-native';
import Config from 'react-native-config';
import { ThemeProvider } from 'styled-components/native';
import StorybookUI from './storybook'
import theme  from './src/global/styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <View />
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