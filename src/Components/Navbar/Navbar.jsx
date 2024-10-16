import React from 'react';
import { Link } from 'react-router-dom'; // Optional, if using react-router for navigation
import './Navbar.scss';
import Logo from '../../Assets/MALL.png'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={Logo} alt='' className='logo'/>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/LogIn">Login</Link></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
