import { useSelector,useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../utils/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart()
{
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearCart())
    }
    return (
        <>
            <div className="cart-container">
                
                <button onClick={handleClear} className='clear-cart-button'>Clear Cart</button>
                
                 {cartItems.length > 0 ? (
                    <div className='cart-items-grid'>
                        {cartItems.map((item, index) => (
                
                                <CartItem details={item} key={index}></CartItem>
                
                        ))}
                    </div>
                ) : (
                    <p>Your cart is empty.</p>
                )}
           
                <br />
                <button className='checkout-button'><Link to='/checkout'>CheckOut</Link></button>
                <br />
                <br />

                
            </div>
            <Link to='/' className='back-link'>Back to <i class="fa fa-home" aria-hidden="true"></i> </Link>
         </>
    )
}