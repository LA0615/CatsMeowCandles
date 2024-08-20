//TO DO:
//ADD A CAROUSEL waxmelts, regular candles, food candles, tealights and other pictures.
//ADD A FEATURED PRODUCT SECTION seasonal items?
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
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
          excited to introduce new and exciting products. Checkout our
          featured product section where we highlight some of our bestsellers
          and seasonal arrivals.
        </p>
        <p>
          Thank you for visiting our website. We hope you find something you
          love! You can also check us out on <a href="https://catsmeowcandles.etsy.com" target="_blank" rel="noopener noreferrer">Etsy</a> and <a href="https://www.instagram.com/catsmeowcandles/" target="_blank" rel="noopener noreferrer">Instagram</a>. If you are
          local, please stop into <a href= "https://www.spotattheave.com/" target="_blank" rel="noopener noreferr">The Spot </a> and check out our products in person.
        
        </p>
      </section>
    </div>
  );
};

export default Home;
