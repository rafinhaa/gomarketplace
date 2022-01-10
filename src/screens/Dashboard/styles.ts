import styled from "styled-components/native";
import { FlatList,FlatListProps } from "react-native";

interface Product {  
    id: string,
    title: string,
    price: string,
    image: string,
    quantity: string
}

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
`;


export const Flatlist = styled(FlatList as new (props: FlatListProps<Product>) => FlatList<Product>).attrs(({
    numColumns: 2,
}))`
    flex: 1;
`;