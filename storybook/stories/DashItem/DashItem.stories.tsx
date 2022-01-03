import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import DashItem from '../../../src/components/DashItem';
import {CenterView} from '../CenterView';

storiesOf('DashItem', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Dash Item', () => (
    <DashItem 
      product={{
        id: '1',
        title: 'Produto 1',
        price: 'R$ 100.00',
        image: 'https://i.picsum.photos/id/1055/200/200.jpg?hmac=23b3LoSYozZgCujiEcPGpgSvTaW35YghR4_EK2eJU9w',
        quantity: '1x R$ 100.00',
      }}
      handleAddProductCart={action('onClickAdd')}
    />
  ))
