import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function Header() {
    // const cartItem = useSelector((store) => store.cart.items);
    // console.log('cartItems', cartItem);
    
    return (<>
        <header>
            <nav>
                <Link to='/'>Home &nbsp;</Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/checkout'>&nbsp;Checkout</Link>
            </nav>
        </header>
    
    </>);
}