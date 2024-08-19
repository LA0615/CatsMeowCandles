//TO DO:
//STYLE THE HOME PAGE
//ADD A CAROUSEL waxmelts, regular candles, food candles, tealights and other pictures.
//ADD A FEATURED PRODUCT SECTION seasonal items?
//ADD ABOUT BLURB and link it to the ABOUT US quick links on the footer section
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <section className="about-section">
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
          excited to introduce new and exciting products. Stay tuned for our
          featured product section where we highlight some of our bestsellers
          and new arrivals.
        </p>
        <p>
          Thank you for visiting our website. We hope you find something you
          love! You can also check us out on Etsy and Instagram. If you are
          local, please stop into The Spot and check out our products in person
          at my booth.
        </p>
      </section>
    </div>
  );
};

export default Home;
