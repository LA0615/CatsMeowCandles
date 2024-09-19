import './ReturnPolicy.css';

const ReturnPolicy = () => {
  const email = "Y2F0c21lb3djYW5kbGVzQGdtYWlsLmNvbQ=="; // Base64 encoded email

  return (
    <div className="return-policy">
      <h2>Return Policy</h2>
      <p className="effective-date">Effective Date: September 5, 2024</p>
      <p className="thank-you-message">
        Thank you for shopping at Cat&apos;s Meow Candles. We are committed to providing quality products and a great experience. Due to the fact that all of our candles are handmade and customized, we only accept returns or exchanges under the following circumstances:
      </p>
      <ol className="black-bold-numbers">
        <li>
          <p className="red-bold-item">Returns: We do not accept returns unless the item arrives damaged.</p>
        </li>
        <li>
          <p className="red-bold-item">Exchanges: We only accept exchanges if your item is damaged during shipping. To be eligible for an exchange:</p>
          <ul>
            <li>
              <p className="info-item">You must contact us within 7 days of receiving the item.</p>
            </li>
            <li>
              <p className="info-item">You must provide proof of damage (e.g., photos of the item and packaging).</p>
            </li>
            <li>
              <p className="info-item">Once your exchange request is approved, we will send you instructions on how to return the damaged item and arrange a replacement.</p>
            </li>
          </ul>
        </li>
      </ol>
      <p className="red-bold-item">Contact:</p>
      <ul>
        <li>
          <p className="info-item">If you have any questions about our policy, please contact us:</p>
        </li>
        <li>
          <p><a href={`mailto:${atob(email)}`}>Email</a></p>
        </li>
      </ul>
    </div>
  );
};

export default ReturnPolicy;