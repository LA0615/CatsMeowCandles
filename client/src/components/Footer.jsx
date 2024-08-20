import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>&quot;Candles That Do More Than Light, They Delight&quot;</h5>
            <p>
              Our mission is to offer superior candles, wax melts, and tealights that bring not just light, 
              but a delightful experience to every moment.
            </p>
          </div>
          <div className="col">
            <h5>Quick Links:</h5>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li
                style={{
                  displya: "inline-flex",
                  alignItems: "center",
                  listStyleType: "disc",
                }}
              >
                <a
                  href="mailto:live2run615@gmail.com?Subject=Contact%20from%20Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{
                      fontSize: "1.2em",
                      color: "blue",
                      marginRight: "0.4em",
                      width: "1.2em",
                      height: "1.0em",
                    }}
                  />
                  <span
                    style={{
                      color: "black",
                      fontWeight: "bolder",
                      fontSize: "1.1em",
                    }}
                  >
                    Contact
                  </span>
                </a>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Contact Us:</h5>
            <p>New Jersey</p>
            <p>
              <a href="mailto:info@company.com">Email</a>
            </p>
          </div>
          <div className="col">
            <h5>Follow Us:</h5>
            {/* Social icons here Etsy, The Spot, Instagram */}
          </div>
        </div>
        <div className="text-center py-3">
          © {new Date().getFullYear()} Cat&apos;s Meow Candles. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
