import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
         
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
          <a href="mailto:live2run615@gmail.com?Subject=Contact%20from%20Website" target="_blank" rel="noopener noreferrer">Contact</a>

          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          {/* Cart icon link */}
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
