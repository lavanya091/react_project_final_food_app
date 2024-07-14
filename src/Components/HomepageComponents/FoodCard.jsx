import React from 'react';
import './FoodCard.css'

function FoodCard({item}) {
  return (
    <div className='food-card'>
    <img src={item.image} alt={item.name} className='food-image'/>
    <h3 className='food-name'>{item.name}</h3>
    <p className='food-description'>{item.description}</p>
    <div className='food-footer'>
        <span className='food-price'>{item.price}</span>
        <button className='select-button'>Select</button>
    </div>
    </div>
  )
}

export default FoodCard
