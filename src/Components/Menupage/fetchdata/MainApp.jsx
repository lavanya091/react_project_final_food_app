import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantsList from './RestaurantsList';
import RestaurantDetails from './RestaurantDetails';
import './fetching.css';

const MainApp = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://apis.ccbp.in/restaurants-list';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setRestaurants(data.restaurants); // Assuming the API returns an object with a 'restaurants' key
      } catch (error) {
        console.error('Error fetching the restaurant data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <h1>Select a Restaurant</h1>
        <select
          onChange={(e) => setSelectedRestaurantId(Number(e.target.value))}
        >
          <option value="">Select...</option>
          {restaurants.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.id}>
              {restaurant.name}
            </option>
          ))}
        </select>
        {selectedRestaurantId && (
          <RestaurantsList
            restaurants={restaurants}
            selectedRestaurantId={selectedRestaurantId}
          />
        )}
      </div>
      <Routes>
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      </Routes>
    </Router>
  );
};

export default MainApp;
