import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function Header() {
    // const cartItem = useSelector((store) => store.cart.items);
    // console.log('cartItems', cartItem);
    
    return (<>
        <Link to='/'>Home &nbsp;</Link>
        <Link to='/cart'>Cart</Link>
    
    </>);
}