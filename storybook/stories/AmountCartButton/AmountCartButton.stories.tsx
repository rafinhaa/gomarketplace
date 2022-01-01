import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import AmountCartButton from '../../../src/components/AmountCartButton';
import {CenterView} from '../CenterView';

storiesOf('Amount CardButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <AmountCartButton />
  ))
  .add('with some emoji', () => (
    <AmountCartButton/>
  ));
