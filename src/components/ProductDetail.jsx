import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import NotFound from './NotFound.jsx';
import { addItem } from "../utils/cartSlice.js";
import { Link } from "react-router-dom";

export default function ProductDetail() {
    const [isAdded, setIsAdded] = useState(false);
    const all = useSelector((state) => state.cart.allItems);
    const dispatch = useDispatch();
    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch the product details based on the route parameter when the component mounts
        const filteredItem = all.find((item) => 
            item.title.toLowerCase() === params.product.toLowerCase()
        );
        setProduct(filteredItem);
    }, [params.product, all]);

    if (!product) {
        return <NotFound />; // Render NotFound component if the product is not found
    }
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
                <button>
                    <Link to='/cart'>Go To &nbsp;<i class="fa-solid fa-cart-shopping"></i></Link>
                </button>
            </div>
        </>
    );
}
