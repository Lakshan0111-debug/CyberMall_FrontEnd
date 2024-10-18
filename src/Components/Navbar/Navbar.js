import React from 'react';
import { Link } from 'react-router-dom'; // Optional, if using react-router for navigation
import './Navbar.css';
import Logo from '../../assets/CyberMallLogo.png'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to='/adminDashboard'>
          <img src={Logo} alt='' className='logo'/>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/LogIn">Login</Link></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
