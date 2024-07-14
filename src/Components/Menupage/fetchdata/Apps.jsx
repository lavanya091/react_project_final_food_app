import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import RestaurantsList from "./RestaurantsList";
import RestaurantDetails from "./RestaurantDetails";
import CartPage from '../CartPage'
function Apps(){
    return(
            <Routes>
            <Route path="/" element={<RestaurantsList/>}/>
            <Route path="/restaurant/:id" element={<RestaurantDetails/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="*" element={<div>404 not defined</div>} />
            </Routes>
    )
}
export default Apps;