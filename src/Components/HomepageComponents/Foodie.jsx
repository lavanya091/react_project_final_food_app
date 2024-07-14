import React from 'react';
import food from './Food.jpg';
import './Foodie.css';

function Foodie() {
  return (
    <div>
    <div className='food_div'>
      
      <img src={food} alt="no-image" className='image-food'/>
      <div className='box'></div>
      <div className='sub_Div'>
      <span className="subheading">Taste.it Restaurant</span><br/><br/>
      <span className="subheading-2">Best Quality</span>
      </div>
      </div>
    </div>
  )
}

export default Foodie
