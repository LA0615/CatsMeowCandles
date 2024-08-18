import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Cat&apos;s Meow Candles:</h5>
            <p>
              Our mission is to provide the best candles, waxmelts, and tealights
              to our customers.
            </p>
          </div>
          <div className="col">
            <h5>Quick Links:</h5>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <a
                href="mailto:live2run615@gmail.com?Subject=Contact%20from%20Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>

              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Contact Us:</h5>
            <p>New Jersey</p>
            <p>
              <a href="mailto:info@company.com">info@company.com</a>
            </p>
          </div>
          <div className="col">
            <h5>Follow Us:</h5>
            {/* Social icons here Etsy, The Spot, Instagram */}
          </div>
        </div>
        <div className="text-center py-3">
          © {new Date().getFullYear()} Cat&apos;s Meow Candles. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
