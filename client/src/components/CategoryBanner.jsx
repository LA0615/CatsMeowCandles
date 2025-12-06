
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CategoryBanner.css';

const CategoryBanner = ({ title, description, showBackButton =false, backLink = '/shop', backText = 'Back to Shop' }) => {
  const location = useLocation();

  return (
    <div className="category-banner">
      <h1>{title}</h1>
      <p>{description}</p>

      {/* Links for Candle Care and Return Policy */}
      <div className="category-banner-links">
        <Link to="/candle-care" state={{ from: location.pathname }}>
          Candle Care
        </Link>
        <span className="category-banner-separator">|</span>
        <Link to="/return-policy" state={{ from: location.pathname }}>
          Return Policy
        </Link>
      </div>
        {/* Optional Back Button */}
      {showBackButton && (
        <div className="category-banner-back">
          <Link to={backLink} className="back-link">
            <span className="arrow">←</span> {backText}
          </Link>
        </div>
      )}
    </div>
  );
};

CategoryBanner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showBackButton: PropTypes.bool,
  backLink: PropTypes.string,
  backText: PropTypes.string,
};

export default CategoryBanner;