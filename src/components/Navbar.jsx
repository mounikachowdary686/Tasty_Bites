import { Link } from "react-router-dom";
 
function Navbar() {
  return (
    <nav className="navbar">
      <h2>Tasty Bites</h2>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/order">Order Food</Link>
        <Link to="/history">Order History</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
