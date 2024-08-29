import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductDetail() {
    const all = useSelector((state) => state.cart.allItems);
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
        return <p>Loading...</p>; 
    }

    return (
        <>
            <h2>{product.title}</h2>
            <img src={product.images[0]} alt={product.title} height="200px" />
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating}</p>
            {/* Add more fields as needed */}
        </>
    );
}
