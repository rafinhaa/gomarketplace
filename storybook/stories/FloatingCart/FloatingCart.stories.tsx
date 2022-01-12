import { storiesOf } from '@storybook/react-native';
import React from 'react';
import FloatingCart from '../../../src/components/FloatingCart';
import {CenterView} from '../CenterView';

storiesOf('Floating Cart', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('FloatingCart', () => (
    <FloatingCart />
  ))