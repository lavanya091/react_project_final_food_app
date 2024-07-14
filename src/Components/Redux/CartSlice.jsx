// src/redux/CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state[itemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
