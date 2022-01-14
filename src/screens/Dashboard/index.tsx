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
    TextProductEmpty,
} from './styles';
import FloatingCart from '../../components/FloatingCart';
import { AxiosError } from 'axios';
import Loader from '../../components/Loader';

const Dashboard: React.FC = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorInfo, setErrorInfo] = useState('');

    async function loadProducts() {
        setLoading(true);
        await api.get('/products').then(response => {
            setProducts(response.data);
        }).catch((error: AxiosError) => {
            setErrorInfo(error.message);
        })
        setLoading(false);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <Container>
            {
                loading ? (
                    <Loader />
                ) : (
                    products.length > 0 ? (
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
                    ) : (
                        <TextProductEmpty>{errorInfo}</TextProductEmpty>
                    )
                )
            }
            <FloatingCart />
        </Container>
    );
} 

export default Dashboard;