import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CategoryBanner = ({ title, description }) => {
  return (
    <div className="text-center py-8 bg-gray-100">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="mt-2 text-gray-600">{description}</p>

      {/* Links for Candle Care and Return Policy */}
      <div className="flex justify-center space-x-4 mt-4">
        <Link to="/candle-care" className="text-blue-500">Candle Care</Link>
        <Link to="/return-policy" className="text-blue-500">Return Policy</Link>
      </div>
    </div>
  );
};
CategoryBanner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CategoryBanner;
