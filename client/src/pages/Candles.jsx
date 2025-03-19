//Add to favorites in the user page using a favorite button on the shop page LINK TO FAVORITES ON USERPAGE
//FUNCTION TO ADD ITEMS TO CART WHEN SELECTED or a button to add to cart ON EACH PRODUCT PAGE
//add return policy and candle care instructions
//add back to shop button

import CategoryBanner from "../components/CategoryBanner";

const Candles = () => {
  return (
    <div>
      <CategoryBanner 
        title="Shop Candles" 
        description="Browse our hand-poured candles in different scents and sizes." 
      />
      {/* Add product grid here */}
    </div>
  );
};

export default Candles;
  