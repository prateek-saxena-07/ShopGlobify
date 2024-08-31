import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function Header() {
    
    
    return (<>
        <header>
            <nav>
                <Link to='/'>Home </Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/checkout'>Checkout</Link>
            </nav>
        </header>
    
    </>);
}