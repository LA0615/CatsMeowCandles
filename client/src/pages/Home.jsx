import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {
  return (
    <div className="home-container">

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Containercandles.svg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-caption-text">Discover our hand-poured 5oz., 8oz., and 16oz. jar candles—crafted with care to fill your space with warmth and inviting aromas</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/jars.png" alt="Second slide" />
          <Carousel.Caption>
            <h3 className="carousel-caption-text">Experience the charm of our hand-poured 4oz., 5oz., 8oz., and 16oz. jar candles—perfect for adding a warm, inviting glow to any room</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/wax.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-caption-text">Discover the perfect blend of creativity and scent with our wax melts, crafted to enhance every moment.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/waxmelts.png"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-caption-text">Indulge in the rich aromas of our hand-poured wax melts, designed to fill your space with lasting fragrance and warmth.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/dessert.png"
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-caption-text">Treat yourself to our hand-poured dessert and food candles, crafted to look as delightful as they smell. Perfect for adding a sweet touch to any space!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/custom.png"
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-caption-text">Craft your unique vibe with our hand-poured custom candles, designed just for you.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section id="about-us" className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to Cat&apos;s Meow Candles! We specialize in creating unique,
          handcrafted candles that bring warmth and light to your home. Our
          collection includes wax melts, regular candles, food-themed candles,
          tealights, and more. Each product is made with love and care to ensure
          the highest quality.
        </p>
        <p>
          Our seasonal items are a hit among our customers, and we are always
          excited to introduce new and exciting products. Checkout our featured
          product section where we highlight some of our bestsellers and
          seasonal arrivals.
        </p>
        <p>
          Thank you for visiting our website. We hope you find something you
          love! You can also check us out on{" "}
          <a
            href="https://catsmeowcandles.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Etsy
          </a>{" "}
          and{" "}
          <a
            href="https://www.instagram.com/catsmeowcandles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          . If you are local, please stop into{" "}
          <a
            href="https://www.spotattheave.com/"
            target="_blank"
            rel="noopener noreferr"
          >
            The Spot{" "}
          </a>{" "}
          and check out our products in person.
        </p>
      </section>

      <section className="featured-products" style={{ borderTop: '2px dashed black', paddingTop: '20px', marginTop: '60px' }}>
      <h2 style={{ textAlign: 'center', padding: '10px', fontWeight:'bold', color: 'blue', fontStyle: 'italic'}}>Featured Products</h2>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </section>
    </div>
  );
};
export default Home;
