//TO DO:
//ADD FAVORITES LIST maybe at the bottom of page not too sure yet
//ADD MY ORDERS AND PAST ORDERS maybe use accordion to show past orders and present orders middle or top of page

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./User.css";
import CandleCare from "./CandleCare";

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
              <ol className="black-bold-numbers">
              <li>
              <p className="red-bold-item">
                    Returns: We do not accept returns unless the item arrives
                    damaged.
                  </p>
                </li>
                <li>
                <p className="red-bold-item">
                    Exchanges: We only accept exchanges if your item is damaged
                    during shipping. To be eligible for an exchange:
                  </p>
                  <ul>
                    <li>
                      <p className="info-item">
                        You must contact us within 7 days of receiving the item.
                      </p>
                    </li>
                    <li>
                    <p className="info-item">
                        You must provide proof of damage (e.g., photos of the
                        item and packaging).
                      </p>
                    </li>
                    <li>
                    <p className="info-item">
                        Once your exchange request is approved, we will send you
                        instructions on how to return the damaged item and
                        arrange a replacement.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                <p className="red-bold-item">Damaged or Defective Items:</p>
                  <ul>
                    <li>
                    <p className="info-item">
                        If your order arrives damaged, please contact us at{" "}
                        <span id="email"></span> within 7 days of delivery. Be
                        sure to include your order number and photos of the
                        damaged item and packaging.
                      </p>
                    </li>
                    <li>
                    <p className="info-item">
                        We will replace the damaged item at no additional cost
                        to you or offer an exchange.
                      </p>
                    </li>
                  </ul>
                </li>
              </ol>
              <p className="red-bold-item" >Contact:
              </p>
              <ul>
                <li>
                <p className="info-item">
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
          <CandleCare />
        </Accordion>
      </div>
    </main>
  );
};

export default User;
