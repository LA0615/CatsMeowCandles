import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  useEffect(() => {
    const contactLink = document.getElementById("header-contact-link");
    const email = atob("bGl2ZTJydW42MTVAZ21haWwuY29t"); // Base64 encoded email to prevent spam bots
    contactLink.href = `mailto:${email}?Subject=Contact%20from%20Website`;
  }, []);

  return (
    <header className="header-container">
      <div className="container-fluid d-flex flex-column justify-content-between align-items-center h-100">
        <div className="text-center mb-3">
          <h1 className="text-center">Cat&apos;s Meow Candles</h1>
          <img src="/logo.gif"
           className="img-fluid logo"
           alt="Cat's Meow Candles Logo" />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-auto">
          <div className="container-fluid justify-content-center">
            <div className="navbar-nav">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
              <a
                id="header-contact-link"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact"
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
                    fontSize: "1.1em",
                  }}
                />{" "}
                Cart
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
