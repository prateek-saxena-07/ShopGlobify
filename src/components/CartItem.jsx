import { useDispatch } from 'react-redux';
import { addItem, removeItem,clearCart } from '../utils/cartSlice';

const CartItem = ({ details }) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addItem(details));
    };

    const handleRemove = () => {
        dispatch(removeItem({ id: details.id }));
    };
    const handleClear = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            { console.log(details)}
            <h2>{details.name}</h2>
            <p>{details.description}</p>
            <p>${details.price}</p>
            <img src={details.images} alt="" height='150px' />
            <p>Quantity: {details.quantity}</p>
             <button onClick={handleRemove}>-</button>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleClear}>Clear cart</button>
        </div>
    );
};

export default CartItem;
