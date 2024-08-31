import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import NotFound from './NotFound.jsx';
import { addItem } from "../utils/cartSlice.js";
import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch"; // Custom Hook for fetching
import { allItem } from '../utils/cartSlice'; 
import { BarLoader } from "react-spinners";

export default function ProductDetail() {
    const { data, error, loading } = useFetch('https://dummyjson.com/products');
    const [isAdded, setIsAdded] = useState(false);
    const all = useSelector((state) => state.cart.allItems);
    const dispatch = useDispatch();
    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (data && all.length === 0) {
            dispatch(allItem(data.products)); // Dispatch allItems action with the fetched products
        }
    }, [data, dispatch, all]);

    useEffect(() => {
        // Fetch the product details based on the route parameter when the component mounts 
        const filteredItem = all.find((item) => 
            item.title.toLowerCase() === params.product.toLowerCase()
        );
        setProduct(filteredItem);
    }, [params.product, all]);
    
    if (loading) {
        return <center> <p>
            <BarLoader></BarLoader>
        </p></center>;
    } // Shows loading state

    if (error) {
        return <p>Error loading products: {error.message}</p>;
    }
    // Shows error state

    if (!product) {
        return <NotFound />; 
    }// Render NotFound component if the product is not found
    
    const handleAdd = () => {
        dispatch(addItem(product))
        setIsAdded(true)
    }

    return (
        <>
            <div className="product-detail">
                <h2>{product.title}</h2>
                <img src={product.images[0]} alt={product.title} />
                <p className="description"><span>Description:</span> {product.description}</p>
                <p className="price"><span>Price:</span> ${product.price}</p>
                <p className="category"><span>Category:</span> {product.category}</p>
                <p className="rating"><span>Rating:</span> {product.rating}</p>
                <p className="brand"><span>Brand:</span> {product.brand}</p>
                <div className="tags">
                    <span>{product.tags[0]}</span>
                    <span>{product.tags[1]}</span>
                </div>
                <button onClick={handleAdd}>{isAdded ? 'Added' : 'Add to Cart'}</button>&nbsp;&nbsp;
               
                    <Link to='/cart'><button>Go To <i className="fa-solid fa-cart-shopping"></i></button></Link>
               
            </div>
        </>
    );
}
