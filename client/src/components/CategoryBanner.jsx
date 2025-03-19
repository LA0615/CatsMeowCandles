
//NEED TO ADD A BACK BUTTON ONCE THE RETURN POLICY AND CANDLE CARE PAGEES ARE NAVIGATED TO.

import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

import "./CategoryBanner.css";

const CategoryBanner = ({ title, description }) => {
  const navigate = useNavigate();

  return (
    <div className="category-banner">
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="banner-links">
        <Link to="/candle-care">Candle Care</Link>
        <Link to="/return-policy">Return Policy</Link>
      </div>
      {/* Back to Shop Button */}
      <button onClick={() => navigate("/shop")} className="back-to-shop-btn">
        ← Back to Shop
      </button>
    </div>
  );
};

// Prop validation
CategoryBanner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CategoryBanner;
