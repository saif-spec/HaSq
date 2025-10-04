import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Secure Development</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="overview">Overview</Link></li>
        <li><Link to="phases">Phases</Link></li>
        <li><Link to="best-practices">Best Practices</Link></li>
        <li><Link to="about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
