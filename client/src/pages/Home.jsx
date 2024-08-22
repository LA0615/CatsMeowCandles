//TO DO:
//ADD A FEATURED PRODUCT SECTION seasonal items?
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div className="home-container">
     <Carousel interval={3000}>
     <Carousel.Item>
          <img
            className="d-block w-100"
            src="path/to/waxmelts.jpg"
            alt="Wax Melts"
          />
          <Carousel.Caption>
            <h3>Wax Melts</h3>
            <p>Discover our wide range of aromatic, and creative, wax melts.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="path/to/regular-candles.jpg"
            alt="Regular Candles"
          />
          <Carousel.Caption>
            <h3>Regular Candles</h3>
            <p>Handcrafted candles for every occasion.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path/to/food-candles.jpg"
            alt="Food Candles"
          />
          <Carousel.Caption>
            <h3>Food Candles</h3>
            <p>Unique food-themed candles that look good enough to eat.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path/to/tealights.jpg"
            alt="Tealights"
          />
          <Carousel.Caption>
            <h3>Tealights</h3>
            <p>Perfect for creating a cozy atmosphere.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path/to/other.jpg"
            alt="Other Products"
          />
          <Carousel.Caption>
            <h3>Other Products</h3>
            <p>Explore our diverse range of candle products.</p>
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
    </div>
  );
};

export default Home;
