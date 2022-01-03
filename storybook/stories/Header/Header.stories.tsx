import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Header from '../../../src/components/Header';
import {CenterView} from '../CenterView';

storiesOf('Header', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Header', () => (
    <Header />
  ))
