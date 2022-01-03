import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import AddItemCart from '../../../src/components/AddItemCart';
import {CenterView} from '../CenterView';

storiesOf('Add Item Cart', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Plus', () => (
    <AddItemCart  
      onPress={action('clicked')}
    />
  ))
