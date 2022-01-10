import React, 
    { 
        useEffect, 
        useState
    }
from 'react';
import DashItem from '../../components/DashItem';
import { api } from '../../services/api';

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

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        api.get('/products').then(response => {
            setProducts(response.data);
        });
    }, []);

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