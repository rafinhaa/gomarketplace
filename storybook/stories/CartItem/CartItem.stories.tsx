import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import CartItem from '../../../src/components/CartItem';
import {CenterView} from '../CenterView';

storiesOf('CartItem', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Cart Item', () => (
    <CartItem 
      product={{
        id: '1',
        title: 'Produto 1',
        price: '1',
        image: 'https://i.picsum.photos/id/1055/200/200.jpg?hmac=23b3LoSYozZgCujiEcPGpgSvTaW35YghR4_EK2eJU9w',
        quantify: '1',
        countCart: 1,
      }}
      onClickAdd={action('clicked-add')}
      onClickRemove={action('clicked-remove')}
    />
  ))
