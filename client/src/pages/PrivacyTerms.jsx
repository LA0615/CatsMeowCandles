import { useEffect } from "react";
import "./PrivacyTerms.css";

const PrivacyTerms = () => {
  useEffect(() => {
    const contactLink1 = document.getElementById("contact-link1");
    const contactLink2 = document.getElementById("contact-link2");
    const email = atob("bGl2ZTJydW42MTVAZ21haWwuY29t"); // Base64 encoded email to prevent spam bots
    if (contactLink1) {
      contactLink1.setAttribute('href', `mailto:${email}?Subject=Contact%20from%20Website`);
    }
    if (contactLink2) {
      contactLink2.setAttribute('href', `mailto:${email}?Subject=Contact%20from%20Website`);
    }
  }, []);

  return (
    <div className="privacy-terms">
      <main>
        <h1>Privacy and Terms of use</h1>
        <p>
          At Cat&rsquo;s Meow Candles, we value your privacy and are comitted to
          safeguarding your personal information. This Privacy Policy outlines
          how we collect, use, and protect your data when you visit our website.
          We may collect personal information such as your name, email address,
          and payment details when you make a purchase. We also collect
          non-personal information like you IP address and browsing behvaior to
          enhance your experience on our website. We use your information to
          process orders, deliver products, and provide you with personalized
          recommendations. With your consent, we may also send you promotional
          offers and updates. We do not sell or rent your personal information
          to third parties. However, we may share your data with trusted
          partners to process payments, deliver orders, and improve our
          services.We use cookies to enhance your browsing experience,
          personalize content, and analyze site traffic. You can control cookie
          settings through your browser. We implement a variety of security
          measures to maintain the safety of your personal information. Your
          data is encrypted and stored securely to prevent unauthorized
          access.You have the right to access, update, or delte your personal
          information at any time.
        </p>
        <p>
          By accessing our website, you, the user, agree to the terms outlined
          in this document. <span className="effective-date">Terms of Use Effective Date: August 21, 2024</span>. Welcome
          to Cat&apos;s Meow Candles! These Terms of Use govern your use of our
          website and services. By accessing or using our website, you agree to
          comply with these terms. Please read them carefully. <span className="bold-number">1.</span> Introduction
          Cat&rsquo;s Meow Candles (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;) provides this website to offer products and services
          to you. By using our site, you agree to these Terms of Use. If you do
          not agree, please do not use our site. <span className="bold-number">2.</span> Use of the Website You must
          be at least 18 years old to use our website. By using the site, you
          confirm that you meet this requirement. <span className="bold-number">3.</span> Account Creation If you
          create an account with us, you must provide accurate and complete
          information. You are responsible for maintaining the confidentiality
          of your account details and for all activities that occur under your
          account. <span className="bold-number">4.</span> Product Information We strive to display accurate product
          descriptions and pricing. However, we do not guarantee that all
          content is free of errors. If an error occurs, we reserve the right to
          correct it and refuse or cancel any order. <span className="bold-number">5.</span> Payment and Billing We
          accept various payment methods, including credit cards and PayPal. By
          providing payment information, you agree to the terms of the payment
          provider. You are responsible for providing accurate billing
          information. <span className="bold-number">6.</span> Shipping and Delivery We offer various shipping
          options. Delivery times may vary depending on your location. Please
          review our Shipping Policy for more details. <span className="bold-number">7.</span> Returns and Refunds If
          you are not satisfied with your purchase, you may return it according
          to our <a href="/shop#return-policy"style={{ fontWeight: "bold" }}>Return Policy</a>. Refunds will be issued according to the payment
          method used during purchase. <span className="bold-number">8.</span> Intellectual Property All content on
          this site, including logos, images, and text, is owned by Cat&apos;s
          Meow Candles or its content suppliers and is protected by intellectual
          property laws. You may not use our content without permission. <span className="bold-number">9.</span>
          User-Generated Content If you post reviews or comments on our site,
          you grant us the right to use, reproduce, and display your content.
          You are responsible for ensuring that your content does not infringe
          on the rights of others. <span className="bold-number">10.</span> Limitation of Liability Our products are
          provided &ldquo;as is.&rdquo; We do not make any warranties, express
          or implied, regarding the operation of the website or the information,
          content, materials, or products included on this site. <span className="bold-number">11.</span> Governing
          Law These terms are governed by the laws of the State of New Jersey.
          Any disputes arising under these terms shall be resolved in the courts
          of New Jersey. <span className="bold-number">12.</span> Changes to Terms We reserve the right to update or
          modify these Terms of Use at any time. Changes will be effective
          immediately upon posting on this site. Continued use of the site after
          changes indicates your acceptance of the new terms. <span className="bold-number">13.</span>Contact
          Information For any questions about these Terms of Use, please contact
          us by {" "}
          <a id="contact-link1" href="#" style={{ fontWeight: "bold" }}>
            Email.{" "}
          </a>
          <span className="bold-number">14.</span> Entire Agreement These Terms of Use,
          along with our Privacy Policy, constitute the entire agreement between
          you and Cat&apos;s Meow Candles concerning the use of our website and
          services.
        </p>
        <p>
          We may update this Privacy and Terms of Use Policy from time to time.
          Any changes will be posted on this page, and we encourage you to
          review it regularly. If you have any questions, please{" "}
          <a id="contact-link2" href="#" style={{ fontWeight: "bold" }}>
            CONTACT US by EMAIL.{" "}
          </a>
          .
        </p>
      </main>
    </div>
  );
}



export default PrivacyTerms;
