import { useEffect, useState } from "react";
import useFetch from "../utils/useFetch"; // Custom Hook for fetching
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from 'react-redux';
import { allItem } from '../utils/cartSlice'; 
import { BarLoader } from "react-spinners";

export default function ProductList() {
    const dispatch = useDispatch();
    const { data, error, loading } = useFetch('https://dummyjson.com/products');
    const allItems = useSelector((state) => state.cart.allItems);  //Access data from Cart slice 
    const [searchTerm, setSearchTerm] = useState('');

    //Adds data fetched by useFetch to allItems in Cartslice state 
    useEffect(() => {
        if (data && allItems.length === 0) {
            dispatch(allItem(data.products)); // Dispatch allItems action with the fetched products
        }
    }, [data, dispatch, allItems]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    //Search Functionality
    const filteredItems = allItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <center>
            <p>
                <BarLoader></BarLoader>
            </p>
        </center>;
    } // Shows loading state

    if (error) {
        return <p>Error loading products: {error.message}</p>;
    } // Shows error state

    return (
        <div>
            <h1>Products List</h1>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearch}
                style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
            />
            <hr />
            <br />
            <div className="container-home">
                {filteredItems.length > 0 ? (
                    filteredItems.map((product) => (
                        <ProductItem key={product.id} details={product} />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
            
        </div>
    );
}
