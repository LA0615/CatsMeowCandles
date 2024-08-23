//TO DO:
//ADD A FEATURED PRODUCT SECTION seasonal items?
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="home-container">

      <Carousel interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Containercandles.svg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-caption-text">5oz., 8oz., and 16 oz. Jar Candles</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/jars.png" alt="Second slide" />
          <Carousel.Caption>
            <h3 className="carousel-caption-text">4oz., 5oz., 8oz., and 16 oz. Jar Candles</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path/to/your/image3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-caption-text"></h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
