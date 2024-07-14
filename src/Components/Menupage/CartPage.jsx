// src/components/CartPage.js
import React from 'react';
import { useCart } from '../context/CartContext';
// import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image_url} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
