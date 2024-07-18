import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cartlist, setCartlist] = useState([]);
  const [userName, setUserName] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
        cartlist,
        setCartlist,
        userName,
        setUserName,
        orderPlaced,
        setOrderPlaced,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
