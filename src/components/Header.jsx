import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function Header() {
    
    
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