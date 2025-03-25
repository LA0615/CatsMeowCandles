import CategoryBanner from "../components/CategoryBanner"; 
import ProductCard from "../components/ProductCard"; 
import { useState } from "react"; 
import { Link } from "react-router-dom"; 
import "../components/ProductCard.css";
import "../components/CategoryBanner.css";

// Placeholder products NEED TO CHANGE AND ADD PRODUCTS
const placeholderProducts = [
  {
    id: 1,
    name: "Seasonal  Candles",
    description: "change this text.",
    options: ["Small", "Medium", "Large"], // Example of product options
    images: [
      { option: "Small", image: "lavender-small.jpg" },
      { option: "Medium", image: "lavender-medium.jpg" },
      { option: "Large", image: "lavender-large.jpg" }
    ], // Example images for different sizes
  },
  {
    id: 2,
    name: "8 oz candles",
    description: "Change this text.",
    options: ["Small", "Medium", "Large"],
    images: [
      { option: "Small", image: "vanilla-small.jpg" },
      { option: "Medium", image: "vanilla-medium.jpg" },
      { option: "Large", image: "vanilla-large.jpg" }
    ],
  },
  {
    id: 3,
    name: "6 oz candles",
    description: "Change this text.",
    options: ["Small", "Medium", "Large"],
    images: [
      { option: "Small", image: "vanilla-small.jpg" },
      { option: "Medium", image: "vanilla-medium.jpg" },
      { option: "Large", image: "vanilla-large.jpg" }
    ],
  },
  {
    id: 4,
    name: "5 oz candles",
    description: "Change this text.",
    options: ["Small", "Medium", "Large"],
    images: [
      { option: "Small", image: "citrus-small.jpg" },
      { option: "Medium", image: "citrus-medium.jpg" },
      { option: "Large", image: "citrus-large.jpg" }
    ],
  },
  {
    id: 5,
    name: "4 oz candles",
    description: "Change this text.",
    options: ["Small", "Medium", "Large"],
    images: [
      { option: "Small", image: "citrus-small.jpg" },
      { option: "Medium", image: "citrus-medium.jpg" },
      { option: "Large", image: "citrus-large.jpg" }
    ],
  },
  {
    id: 6,
    name: "3 oz candles",
    description: "Change this text.",
    options: ["Small", "Medium", "Large"],
    images: [
      { option: "Small", image: "citrus-small.jpg" },
      { option: "Medium", image: "citrus-medium.jpg" },
      { option: "Large", image: "citrus-large.jpg" }
    ],
  },

];

const Candles = () => {
  const [isLoggedIn] = useState(false);

  return (
    <div className="candles-page">
      {/* Using the CategoryBanner component */}
      <CategoryBanner 
        title="Our Candle Collection"
        description="Browse our hand-poured candles in different scents and sizes."
      />

      {/* Back to Shop Button */}
      <div className="back-to-shop-button">
        <Link to="/shop" className="button">
        <span className="arrow">←</span> Back to Shop
        </Link>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {placeholderProducts.map((product) => (
          <ProductCard key={product.id} product={product} isLoggedIn={isLoggedIn} />
        ))}
      </div>
    </div>
  );
};

export default Candles;
