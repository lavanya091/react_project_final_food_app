import React from 'react';
import Button from 'react-bootstrap/Button';
import './Homepage.css';
import { Link } from 'react-router-dom';
import Carsol from './carsol';
import Foodie from './Foodie';
import Footer from './Footers';

const navStyle = {
  fontFamily: 'Georgia, Serif',
};

function Homepage() {
  return (
    <>
    <Carsol/>
      <nav style={navStyle}>
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/Menu" className="nav-link">Menu</Link>
          </li>
          <li>
            <Link to="/About" className="nav-link">About Us</Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-link">Contact</Link>
          </li>
          <li>
            <Link to="/restaurants" className="nav-link">Restaurants</Link>
          </li>
        </ul>
      </nav>
      <Foodie/>
      {/* <SpecialMenu/> */}
      <Footer/>
      {/* <Delivery /> */}
    </>
  );
}

export default Homepage;

