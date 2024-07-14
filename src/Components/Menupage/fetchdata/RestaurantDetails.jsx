import React, { useState, useEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import CartContext from '../../context/CartContext';
import './RestaurantDetails.css';

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'; // Replace with your actual token
  const {addToCart} = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://apis.ccbp.in/restaurants-list/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const restaurantData = await response.json();
        setRestaurantData(restaurantData);
        console.log('Fetched Restaurant Data:', restaurantData.id);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleAddToCart = (foodItem) => {
    // Assuming addToCart from CartContext handles adding items to cart
    addToCart({ ...foodItem, price: foodItem.cost });
    console.log('Adding to cart:', foodItem);
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="restaurant-details">
      <h1 className="restaurant-name">{restaurantData.name}</h1>
      <img className="restaurant-image" src={restaurantData.image_url} alt={restaurantData.name} />
      <p className="restaurant-cost">Cost for Two: ₹{restaurantData.cost_for_two}</p>
      <p className="restaurant-cuisine">Cuisine: {restaurantData.cuisine}</p>
      <p className="restaurant-location">Location: {restaurantData.location}</p>
      <p className="restaurant-opens-at">Opens at: {restaurantData.opens_at}</p>
      <p className="restaurant-rating">Rating: {restaurantData.rating}</p>
      <p className="restaurant-reviews-count">Reviews Count: {restaurantData.reviews_count}</p>
      
      <h3 className="food-items-heading">Food Items:</h3>
      <div className="food-items">
        {restaurantData.food_items?.map((foodItem) => (
          <div className="food-item" key={foodItem.id}>
            <img className="food-item-image" src={foodItem.image_url} alt={foodItem.name} />
            <h4 className="food-item-name">{foodItem.name}</h4>
            <p className="food-item-cost">₹{foodItem.cost}</p>
            <p className="food-item-rating">Rating: {foodItem.rating}</p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(foodItem)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantDetails;
