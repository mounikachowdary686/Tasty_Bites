import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <h1>Welcome to Tasty Bites</h1>
      <p>Fresh, home-style food delivered hot to your table.</p>

      <div className="home-actions">
        <Link to="/menu" className="home-button">View Menu</Link>
        <Link to="/order" className="home-button">Order Now</Link>
      </div>

      <section className="home-features">
        <div className="feature-card">
          <h3>🍲 Fresh Ingredients</h3>
          <p>We cook everything fresh, every single day.</p>
        </div>
        <div className="feature-card">
          <h3>🚀 Fast Delivery</h3>
          <p>Hot food delivered to your table in minutes.</p>
        </div>
        <div className="feature-card">
          <h3>⭐ Loved by Customers</h3>
          <p>Rated 4.8/5 by hundreds of happy customers.</p>
        </div>
      </section>

      <p className="home-hours">Open daily: 11:00 AM – 11:00 PM</p>
    </main>
  );
}

export default Home;