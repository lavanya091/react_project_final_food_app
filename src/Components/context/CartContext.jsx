// src/contexts/CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        const newState = [...state];
        newState[itemIndex].quantity += 1;
        return newState;
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = item => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = id => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
