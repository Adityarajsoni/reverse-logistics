import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      
        <div className="logo">ReverseLogix</div>

        <div className="navItems">
          <Link to="/" className="home">Home</Link>
          <Link to="/" className="customer">Features</Link>
          <Link to="/login" className="login">Login/Sign-Up</Link>
        </div>
    </nav>
  );
}
