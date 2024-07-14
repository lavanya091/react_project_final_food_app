// // src/components/Cart/index.js
// import React, { useContext } from 'react';
// import CartContext from '../context/CartContext';
// import './Cart.css';

// const Cart = () => {
//   const { cart } = useContext(CartContext);
//   console.log('Cart items:', cart);
//   return (
//     <div className="cart-container">
//       <h2>Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <ul>
//           {cart.map(item => (
//             <li key={item.id}>
//               <h3>{item.name}</h3>
//               <p>Price: ₹{item.price}</p>
//               <p>Quantity: {item.quantity}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;
