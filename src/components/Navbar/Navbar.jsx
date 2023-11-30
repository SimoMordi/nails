import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation
import MenuIcon from '@mui/icons-material/Menu'; // Material UI icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Sammi Nails Spa</div>
      <MenuIcon onClick={toggleMenu} className="menu-icon" />
      {isOpen && (
        <div className="nav-links-mobile">
          <Link to="/" className="nav-item" onClick={toggleMenu}>Home</Link>
          <Link to="/services" className="nav-item" onClick={toggleMenu}>Services</Link>
          <Link to="/gallery" className="nav-item" onClick={toggleMenu}>Gallery</Link>
          <Link to="/about" className="nav-item" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="nav-item" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
