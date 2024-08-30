import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
import { Link } from 'react-router-dom';


const CartItem = ({ details }) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addItem(details));
    };

    const handleRemove = () => {
        dispatch(removeItem({ id: details.id }));
    };
   

    return (
        <div style={{border:'10px solid', height:'400px' ,width:'200px'}}>
            
            <h3>{details.title}</h3>
            <p>${details.price}</p>
            <img src={details.images[0]} alt="" height='100px' />
            <p>Quantity: {details.quantity}</p>
            &nbsp;{details.quantity>1?(<button onClick={handleRemove}>-</button>):( <button onClick={handleRemove}><i className="fa-solid fa-trash-can"></i></button>)}&nbsp;
            <button onClick={handleAdd}>+</button>&nbsp;
            
            
            
        </div>
    ); 
};

export default CartItem;
