import React, { useState, useEffect } from 'react';
import './restaurantlist.css';
import { Link } from 'react-router-dom';

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log('Restaurants State:', restaurants);

  const apiUrl = 'https://apis.ccbp.in/restaurants-list/?limit=30';
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'; // Replace with your actual token

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authToken}` // Include authorization header if required
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const restaurantData = await response.json();
        console.log('API Response:', restaurantData);
        setRestaurants(restaurantData.restaurants || []); // Assuming "restaurants" key in response
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only on component mount

  return (
    <div className='overall_parent_container'>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div key={restaurant.id} className='img_container'>
              <Link to={`/restaurant/${restaurant.id}`}>
                <h4>{restaurant.name}</h4>
              </Link>
              <img src={restaurant.image_url} alt={restaurant.name} />
            </div>
          ))
        ) : (
          <p>No restaurants available</p>
        )
      )}
    </div>
  );
};

export default RestaurantsList;
