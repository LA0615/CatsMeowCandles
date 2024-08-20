import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    const contactLink = document.getElementById("contact-link");
    const email = atob('bGl2ZTJydW42MTVAZ21haWwuY29t'); // Base64 encoded email to prevent spam bots
    contactLink.href = `mailto:${email}?Subject=Contact%20from%20Website`;
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>&quot;Candles That Do More Than Light, They Delight&quot;</h5>
            <p>
              Our mission is to offer superior candles, wax melts, and tealights
              that bring not just light, but a delightful experience to every
              moment.
            </p>
          </div>
          <div className="col quick-links-section">
            <h5>Quick Links:</h5>
            <ul className="quick-links-list">
              <li>
                <a href="/#about-us" className="quick-link about-us-link">
                  About Us
                </a>
              </li>
              <li>
                <a
                  id="contact-link"
                  className="quick-link contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{
                      fontSize: "1.2em",
                      color: "Black",
                      marginRight: "0.4em",
                      width: "1.2em",
                      height: "1.0em",
                    }}
                  />
                  Contact Us:
                </a>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Follow Us:</h5>
            <p>Etsy Instagram  The Spot</p>
            {/* Social icons here Etsy, The Spot, Instagram */}
          </div>
        </div>
        <div className="text-center py-3 copyright">
          © {new Date().getFullYear()} Cat&apos;s Meow Candles. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
