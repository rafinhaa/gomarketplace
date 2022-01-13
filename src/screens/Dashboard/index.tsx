import React, 
    { 
        useEffect, 
        useState
    }
from 'react';
import DashItem from '../../components/DashItem';
import { api } from '../../services/api';
import { Product } from '../../types';
import { useDispatch } from 'react-redux';
import { addProductCart } from '../../store/modules/products/actions';

import { 
    Container,
    Flatlist,
} from './styles';

const Dashboard: React.FC = () => {
    const dispatch = useDispatch();
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
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <DashItem 
                        product={item} 
                        handleAddProductCart={
                            () => dispatch(addProductCart(item))
                        }
                    />
                )}
            />
        </Container>
    );
} 

export default Dashboard;