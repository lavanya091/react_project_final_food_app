import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import RestaurantsList from "./RestaurantsList";
import RestaurantDetails from "./RestaurantDetails";
import Cart from "../../Cart/Cart";
function Apps(){
    return(
            <Routes>
            <Route path="/" element={<RestaurantsList/>}/>
            <Route path="/restaurant/:id" element={<RestaurantDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<div>404 not defined</div>} />
            </Routes>
    )
}
export default Apps;