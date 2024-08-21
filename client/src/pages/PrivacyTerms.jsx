import { useEffect } from "react";
import "./PrivacyTerms.css";

const PrivacyTerms = () => {
  useEffect(() => {
    const contactLink = document.getElementById("contact-link");
    const email = atob("bGl2ZTJydW42MTVAZ21haWwuY29t"); // Base64 encoded email to prevent spam bots
    contactLink.href = `mailto:${email}?Subject=Contact%20from%20Website`;
  }, []);

  return (
    <div className="privacy-terms">
      <main>
      <h1>Privacy and Terms of use</h1>
      <p>
        At Cat&apos;s Meow Candles, we value your privacy and are comitted to
        safeguarding your personal information. This Privacy Policy outlines how
        we collect, use, and protect your data when you visit our website.
      </p>
      <p>
        We may collect personal information such as your name, email address,
        and payment details when you make a purchase. We also collect
        non-personal information like you IP address and browsing behvaior to
        enhance your experience on our website.
      </p>
      <p>
        We use your information to process orders, deliver products, and provide
        you with personalized recommendations. With your consent, we may also
        send you promotional offers and updates.
      </p>
      <p>
        We do not sell or rent your personal information to third parties.
        However, we may share your data with trusted partners to process
        payments, deliver orders, and improve our services.
      </p>
      <p>
        We use cookies to enhance your browsing experience, personalize content,
        and analyze site traffic. You can control cookie settings through your
        browser.
      </p>
      <p>
        We implement a variety of security measures to maintain the safety of
        your personal information. Your data is encrypted and stored securely to
        prevent unauthorized access.You have the right to access, update, or
        delte your personal information at any time.
      </p>

      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page, and we encourage you to review it regularly.
      </p>
      <p>
        If you have any questions, please{" "}
        <a id="contact-link" href="#" style={{ fontWeight: "bold" }}>
          CONTACT US
        </a>
        .
      </p>
      </main>
    </div>
  );
};

export default PrivacyTerms;



