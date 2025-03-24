
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Shop.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";


// Category Data for Shop Page
const categories = [
  {
    path: "/shop/candles",
    image: "/jellyjars.jpg",
    description: "Explore our hand-poured candles, crafted for a warm and inviting ambiance.",
  },
  {
    path: "/shop/tea-lights",
    image: "/tealights.jpeg",
    description: "Our tea lights are perfect for creating a cozy glow. These  tea lights are small but mighty.",
  },
  {
    path: "/shop/wax-melts",
    image: "/melts.jpg",
    description: "These flameless wax melts fill your home with long-lasting, aromatic fragrance—perfect for creating a cozy and inviting atmosphere."
  },
  {
    path: "/shop/votives",
    image: "/votives.jpg",
    description: "Our elegant votive candles are compact yet stylish, casting a warm glow that adds charm and ambiance to any space.",
  },
];

const Shop = () => {
  return (
    <Container>
      {/* Banner Section */}
      <div className="shop-banner text-center">
        <h1>Specialty Candles</h1>
        <p>Hand-poured artistry for those who love the extraordinary</p>
        <Link to="/shop/specialty">
          <button className="btn">Shop Now</button>
        </Link>
      </div>

      
<Row className="mt-4">
  {categories.map((category, index) => (
    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 text-center">
      <Card className="shadow-sm">   
        {category.image && (
          <Card.Img 
            variant="top" 
            src={category.image} 
            alt={category.name} 
            className="card-img-top"
          />
        )}

              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                {console.log("Rendering Description", category.description)}
                <Card.Text>{category.description}</Card.Text>
                <Link to={category.path} className="btn btn-primary">
                  Shop Now
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default Shop;
