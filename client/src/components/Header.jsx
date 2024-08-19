import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Header.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="d-flex flex-column align-items-center vh-100 justify-content-center">
        <div className="brand-container text-center">
          <h1 className="text-center">Cat&apos;s Meow Candles</h1>
          <video src="logo.mp4" className="logo" autoPlay loop muted />
        </div>
        <div className="nav-container mt-3">
          <div className="nav-group d-flex justify-content-center">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
            <a
              href="mailto:live2run615@gmail.com?Subject=Contact%20from%20Website"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Contact
            </a>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{
                  color: "black",
                  fontSize: "1.2em",
                }}
              />{" "}
              Cart
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
