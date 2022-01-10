import React, { useEffect } from 'react';
import { FlatListProps } from 'react-native';
import DashItem from '../../components/DashItem';

import { 
    Container,
    Flatlist,
} from './styles';

interface Product {  
    id: string,
    title: string,
    price: string,
    image: string,
    quantity: string
}

const Dashboard: React.FC = () => {

    const products: Product[] = [
        {
            id: '1',
            title: 'Produto 1',
            price: 'R$ 10,00',
            image: 'https://picsum.photos/200/300',
            quantity: '1',
        },
        {
            id: '2',
            title: 'Produto 2',
            price: 'R$ 20,00',
            image: 'https://picsum.photos/200/300',
            quantity: '2',
        }
    ]

    return (
        <Container>
            <Flatlist
                data={products}
                keyExtractor={(item: Product) => item.id}
                renderItem={({ item }: {item: Product}) => <DashItem product={item} handleAddProductCart={() => console.log('clicou')}  />}
            />
        </Container>
    );
} 

export default Dashboard;