import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantDetails from './fetchdata/RestaurantDetails';
import RestaurantsList from './fetchdata/RestaurantsList';
import Apps from './fetchdata/Apps';


function Menupages() {
  return (
    <>
     {/* <CartProvider>  */}
    {/* <Homee /> */}
    <Apps/>
     {/* </CartProvider>   */}
    </>
  );
}

export default Menupages;
