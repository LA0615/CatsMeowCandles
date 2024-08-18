import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; // Import the Link component
import './Header.css'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center">Cat&apos;s Meow Candles</h1>
        <div className="nav-container d-flex justify-content-between w-100">
          <div className="nav-group">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <a href="mailto:live2run615@gmail.com?Subject=Contact%20from%20Website" target="_blank" rel="noopener noreferrer" className="nav-link">Contact</a>
          </div>
          <div className="nav-group">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon icon={faCartShopping} style={{ color: "#0a11c7" }} /> Cart
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;