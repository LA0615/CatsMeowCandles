// TODO: Add backend logic for saving to user’s favorites list and having list show up on users page
//TODO: FIx bug issue where it says a user must be logged in to save to favorites when the user is actually logged in.
//ToDO:add logic to have product added to the cart page for checkout
//TODO: Move BACK button to Bottom of page on ProductCardCSS

//Product Card component for all product pages
import { useState } from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";
import { FaShoppingCart } from "react-icons/fa";
import  "./ProductCard.css";

const ProductCard = ({ product, isLoggedIn }) => {
  // Placeholder for adding the product to favorites (you'd need to handle this with your backend)
  const handleAddToFavorites = () => {
    if (!isLoggedIn) {
      alert("Please log in to add this product to your favorites.");
    } else {
      // Handle adding to favorites
      alert(`${product.name} has been added to your favorites!`);
    }
  };

  const [selectedOption, setSelectedOption] = useState(
    product.options?.[0] || "Default Option"
  );
  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0]?.image || "default-image.jpg"
  ); // Provide a fallback image

  const handleOptionChange = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);

    // Update image based on selected option, check if product.images exists
    const selectedProductImage =
      product.images?.find((image) => image.option === selected)?.image ||
      selectedImage; // Fallback to current image if no match found
    setSelectedImage(selectedProductImage);
  };

  return (
    <div className="product-card">
      <img src={selectedImage} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>

      <p className="selected-option">Selected Option: {selectedOption}</p>
      {/* Dropdown for scent/color options */}
      {product.options?.length > 0 ? (
        <select
          className="option-dropdown"
          onChange={handleOptionChange}
          value={selectedOption}
        >
          {product.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <p>No options available</p> // Message if no options are available
      )}

      {/* Buttons */}
      <div className="button-container">
        <button className="add-to-cart-btn">
          <FaShoppingCart style={{ marginRight: "8px" }} />
          Add to Cart
        </button>
        {/* Add to Favorites Button (optional, based on login state) */}
        <button className="add-to-favorites-btn" onClick={handleAddToFavorites}>
          ❤️ Add to Favorites
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        option: PropTypes.string,
        image: PropTypes.string,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default ProductCard;
