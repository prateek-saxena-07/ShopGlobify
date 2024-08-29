import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const [isAdded, setIsAdded] = useState(false);

    // Check if the item is already in the cart when the component mounts or when cartItems changes
    useEffect(() => {
        const itemAdded = cartItems.some((item) => item.id === props.details.id);
        setIsAdded(itemAdded);
    }, [cartItems, props.details.id]);

    const addToCart = () => {
        if (!isAdded) {
            dispatch(addItem(props.details));
            setIsAdded(true); // Set to true after adding the item to the cart
        } else {
            console.log('Item already added');
        }
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h2>{props.details.title}</h2>
            <img src={props.details.images[0]} alt="" height='160px' width='200px' />
            <p>Price: ${props.details.price}</p>
            <Link to={`/${props.details.title}`}>Details</Link>
            <button onClick={addToCart}>
                {isAdded ? 'Added' : 'Add to Cart'}
            </button>
        </div>
    );
}
