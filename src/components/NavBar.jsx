import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/projects" className="nav-link">Projects</Link>
     
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/learning" className="nav-link">Learning</Link>
      <Link to="/games" className="nav-link">2D Games</Link>
       
    </nav>
  );
};

export default Navbar;