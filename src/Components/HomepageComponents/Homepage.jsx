import React from 'react';
import { Link } from 'react-router-dom';
import Carsol from './Carsol/Carsol';
import Foodie from './Foodie';
import Footer from './Footers';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Steakhouse</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li>
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Carsol />
      <Foodie />
      <Footer />
    </>
  );
}

export default Homepage;
