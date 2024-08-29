import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function Cart()
{
    const cartItems = useSelector((state) => state.cart.cartItems);
console.log(cartItems)
    return (
        <>
             <h1>Shopping Cart</h1>
             {cartItems.length > 0 ? (
                <div>
                    {cartItems.map((item, index) => (
                        
                            <CartItem details={item} key={index}></CartItem>
                        
                    ))}
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
         </>
    )
}