import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bg1 from './background_image1.jpg';
import bg2 from './background_image2.jpg';
import bg3 from './background_image3.jpg';
import './Carsol.css'

function Carsol() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <div className="carousel-item-container">
          <img src={bg1} alt="First slide" className="image" />
          <div className="overlay"></div> {/* Overlay layer */}
        </div>
        <Carousel.Caption>
          <h3>Gourmet Delicacies</h3>
          <p>Our menu offers an exquisite array of gourmet delicacies that will tantalize your taste buds and leave you craving for more.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className="carousel-item-container">
          <img src={bg2} alt="Second slide" className="image" />
          <div className="overlay"></div> {/* Overlay layer */}
        </div>
        <Carousel.Caption>
          <h3>Fresh and Flavorful</h3>
          <p>At our restaurant, we believe in serving fresh and flavorful dishes that bring out the best in every ingredient.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-container">
          <img src={bg3} alt="Third slide" className="image" />
          <div className="overlay"></div> {/* Overlay layer */}
        </div>
        <Carousel.Caption>
          <h3>Culinary Excellence</h3>
          <p>Experience culinary excellence with our expertly crafted dishes, where each plate is a work of art and a testament to our passion for great food.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carsol;
