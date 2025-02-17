import { createContext } from "react";

export const CartContex = createContext();

export const CartProvider = ({ children }) => {
    
    
  return <CartContex.Provider value={{}}>{children}</CartContex.Provider>;
};
