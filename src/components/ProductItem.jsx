import { useDispatch ,useSelector} from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function ProductItem(props) {
    const dispatch = useDispatch();
    const [added, setAdded] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);

    const addToCart = () => {
        const itemAdded = cartItems.some((item) => item.id === props.details.id);
        if (!itemAdded)
            dispatch(addItem(props.details));
        else
            console.log('added');//create a global using useContext or state and change ui of button to show added

    }

    return (
        <div style={{ display:'flex',border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h2>{props.details.title}</h2>
            <p>{props.details.description}</p>
            <img src={props.details.images[0]} alt="" height='160px' width='600px'/>
            <p>Price: ${props.details.price}</p>
            <Link to={`/${props.details.title}`} >Details</Link>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}
