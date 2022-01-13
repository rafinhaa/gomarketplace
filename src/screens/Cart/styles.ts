import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { CartProduct } from "../../types";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Flatlist = styled(FlatList as new (props: FlatListProps<CartProduct>) => FlatList<CartProduct>)`
    flex: 1;
    padding: 8px;
`;