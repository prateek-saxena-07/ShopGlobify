import { useEffect } from "react";
import useFetch from "../utils/useFetch"; // Custom Hook for fetching
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from 'react-redux';
import { allItem } from '../utils/cartSlice'; 

export default function ProductList() {
    const dispatch = useDispatch();
    const { data, error, loading } = useFetch('https://dummyjson.com/products');
    const all = useSelector((state) => state.cart.allItems);

    useEffect(() => {
        if (data && data.products && all.length===0) {
            dispatch(allItem(data.products)); // Dispatch allItems action with the fetched products
        }
    }, [data,dispatch,all]);

    if (loading) return <p>Loading...</p>; // Shows loading state
    if (error) return <p>Error loading products: {error.message}</p>; // Shows error state

    // console.log('state', all.length);

    return (
        <div>
            <h1>Product List</h1>
            <input placeholder="Search"></input>
            {data && data.products ? (
                data.products.map((product) => (
                    <ProductItem key={product.id} details={product} />
                ))
            ) : (
                <p>Data is not yet available.</p>
            )}
        </div>
    );
}
