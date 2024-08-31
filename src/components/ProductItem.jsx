import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);//Access CartItem State to be updated
    const [isAdded, setIsAdded] = useState(false);

    // Checks if the item is already in the cart when the component mounts or when cartItems changes
    useEffect(() => {
        const itemAdded = cartItems.some((item) => item.id === props.details.id);
        setIsAdded(itemAdded);//For Conditional Rendering of Add button
    }, [cartItems, props.details.id]);

    
    const addToCart = () => {
        if (!isAdded) {
            dispatch(addItem(props.details));
            setIsAdded(true); 
        } 
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }} className='container-item product-item'>
           
            <Link to={`/${props.details.title}`}> <h2>{props.details.title}</h2>
            <img src={props.details.images[0]} alt="" height='160px' width='200px' />
                <p>Price: ${props.details.price}</p>
            </Link>
            
            <button onClick={addToCart}>
                {isAdded ? 'Added' : 'Add to Cart'}
            </button>
            <button className='go-to-cart-button' onClick={addToCart}>
                    <Link to='/checkout'>Buy Now</Link>
                </button>
        </div>
    );
}
