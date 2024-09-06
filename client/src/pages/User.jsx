//TO DO:
//CANDLE CARE CARD  maybe use card with links to download pdf of candle care tips either left or under return policy
//ADD FAVORITES LIST maybe at the bottom of page not too sure yet
//ADD MY ORDERS AND PAST ORDERS maybe use accordion to show past orders and present orders middle or top of page

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./User.css";

const User = () => {
  const navigate = useNavigate();
  const { authToken, user } = useContext(AuthContext);

  useEffect(() => {
    // Redirect to home if no user is authenticated
    if (!authToken || !user) {
      navigate("/");
    }
  }, [authToken, user, navigate]);

  // Obfuscated email
  const email = "Y2F0c21lb3djYW5kbGVzQGdtYWlsLmNvbQ=="; // Base64 encoded email

  return (
    <main className="main-content">
      <h1>Welcome</h1>
      <div className="container mt-4">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Our Return Policy</Accordion.Header>
            <Accordion.Body>
              <p className="effective-date">
                Effective Date: September 5, 2024
              </p>
              <p className="thank-you-message">
                   Thank you for shopping at Cat&apos;s Meow Candles. We are
                committed to providing quality products and a great experience.
                Due to the fact that all of our candles are handmade and customized, we only
                accept returns or exchanges under the following circumstances:
              </p>
              <ol>
                <li>
                  <p>
                    Returns: We do not accept returns unless the item arrives
                    damaged.
                  </p>
                </li>
                <li>
                  <p>
                    Exchanges: We only accept exchanges if your item is damaged
                    during shipping. To be eligible for an exchange:
                  </p>
                  <ul>
                    <li>
                      <p>
                        You must contact us within 7 days of receiving the item.
                      </p>
                    </li>
                    <li>
                      <p>
                        You must provide proof of damage (e.g., photos of the
                        item and packaging).
                      </p>
                    </li>
                    <li>
                      <p>
                        Once your exchange request is approved, we will send you
                        instructions on how to return the damaged item and
                        arrange a replacement.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Damaged or Defective Items:</p>
                  <ul>
                    <li>
                      <p>
                        If your order arrives damaged, please contact us at{" "}
                        <span id="email"></span> within 7 days of delivery. Be
                        sure to include your order number and photos of the
                        damaged item and packaging.
                      </p>
                    </li>
                    <li>
                      <p>
                        We will replace the damaged item at no additional cost
                        to you or offer an exchange.
                      </p>
                    </li>
                  </ul>
                </li>
              </ol>
              <p>Contact Information:</p>
              <ul>
                <li>
                  <p>
                    If you have any questions about our policy, please contact
                    us:
                  </p>
                </li>
                <li>
                  <p>
                    <a href={`mailto:${atob(email)}`}>Email</a>
                  </p>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How to Care for Your Candles and Wax Melts
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </main>
  );
};

export default User;
