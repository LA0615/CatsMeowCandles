//FUNCTION TO ADD ITEMS TO CART WHEN SELECTED or a button to add to cart ON EACH PRODUCT PAGE
//Function to add item to favtories on the user page when logged in
//add return policy and candle care instructions
//add back to shop button/category banner


import { Container, Row, Col, Card } from "react-bootstrap";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useState } from "react";

const specialtyProducts = [
  { id: 1, name: "Luxury Gold Candle", image: "/luxury-gold.jpg", price: "$25" },
  { id: 2, name: "Crystal Infused Candle", image: "/crystal-infused.jpg", price: "$30" },
  { id: 3, name: "Hand-Carved Wax Art", image: "/hand-carved.jpg", price: "$40" },
  { id: 4, name: "Scented Figurine Candle", image: "/figurine.jpg", price: "$35" },
];

const SpecialtyCandles = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center">Uniquely Crafted Candles</h1>
      <p className="text-center">
      Light up your home with candles as unique as you are—hand-poured with care and creativity
      </p>

      <Row className="mt-4">
        {specialtyProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card style={{ width: "18rem" }} className="shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body className="text-center">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                
                {/* Cart and Favorite Icons */}
                <div className="d-flex justify-content-center gap-3">
                  <FaShoppingCart className="cart-icon" title="Add to Cart" style={{ fontSize: "24px", cursor: "pointer", color: "#333" }} />
                  
                  <FaHeart
                    className={`heart-icon ${favorites.includes(product.id) ? "favorite" : ""}`}
                    title="Add to Favorites"
                    onClick={() => toggleFavorite(product.id)}
                    style={{ fontSize: "24px", cursor: "pointer", color: favorites.includes(product.id) ? "red" : "gray" }}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SpecialtyCandles;


