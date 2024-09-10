import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './CandleCare.css';

const CandleCare = () => {
  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>Candle Care</Accordion.Header>
      <Accordion.Body>
        <p className="tips">Helpful tips to enjoy your candle, wax melts, and tea lights safely:</p>
        <ul className="candle-care-list">
          <li>Trim the wick to 1/4 inch before each burn.</li>
          <li>Allow the wax to melt to the edges of the container each burn to prevent tunneling.</li>
          <li>Keep the candle away from drafts, flammable objects, children, and pets.</li>
          <li>Never leave a burning candle unattended.</li>
          <li>Do not burn the candle for more than 4 hours at a time.</li>
          <li>Place candle on a flat, stable, and heat-resistant surface only.</li>
        </ul>
        <a href="/candlecare.pdf" download className="candle-care-link">
        <FontAwesomeIcon icon={faDownload} /> Download our candle care tips
          </a>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default CandleCare;