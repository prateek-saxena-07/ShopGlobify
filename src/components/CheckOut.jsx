import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function CheckOut() {
    const cartItems = useSelector((state) => state.cart.cartItems);
      const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };
    return (
        <>
            <h1>CheckOut</h1>
            <div>
                {cartItems.map(item => (
                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img src={item.images[0]} alt={item.name} height='40px' width='40px' style={{ marginRight: '10px' }} />
                        <span>{item.title}</span>
                        <span style={{ marginLeft: 'auto' }}>${item.price.toFixed(2)} x {item.quantity}</span>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                <h3>Total: ${calculateTotal()}</h3>
                {/* Dummy Button */}
                <button>CheckOut</button>
            </div>
            <br />
            <br />

            <Link to='/' className='back-link'>Back to <i className="fa fa-home" aria-hidden="true"></i> </Link>
        </>
    );
}
