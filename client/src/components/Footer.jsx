import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEtsy, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    const contactLink = document.getElementById("contact-link");
    const email = atob("Y2F0c21lb3djYW5kbGVzQGdtYWlsLmNvbQ=="); // Base64 encoded email to prevent spam bots
    contactLink.href = `mailto:${email}?Subject=Contact%20from%20Website`;
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <h5>&quot;Candles That Do More Than Light, They Delight&quot;</h5>
        <p>
          Our mission is to offer superior candles, wax melts, and tealights
          that bring not just light, but a delightful experience to every
          moment.
        </p>
        <div className="quick-links-section">
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
                aria-label="Contact Us"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    fontSize: "1em",
                    color: "Black",
                    marginRight: "0.4em",
                  }}
                />
                Contact Us
              </a>
            </li>
            <li>
              <Link to="/privacy">Privacy and Terms Policy</Link>
            </li>
          </ul>
        </div>
        <div className="col follow-us-section">
          <h5>Follow Us:</h5>
          <ul className="follow-us-list">
            <li>
              <a
                href="https://www.spotattheave.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Spot
              </a>
            </li>
            <li>
              <a
                href="https://catsmeowcandles.etsy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEtsy}
                  style={{
                    fontSize: "1em",
                    color: "f2542d",
                    marginRight: "0.4em",
                    width: "1.2em",
                    height: "1.0em",
                    fontWeight: "bold",
                  }}
                />
                Etsy
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/catsmeowcandles/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    fontSize: "1em",
                    color: "red",
                    marginRight: "0.4em",
                    width: "1.2em",
                    height: "1.0em",
                  }}
                />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-3 copyright">
        © {new Date().getFullYear()} Cat&apos;s Meow Candles. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
