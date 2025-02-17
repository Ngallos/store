import React, { createContext, useState } from "react";

//creazione del contesto
export const GlobalContext = createContext();

//Convenzione: scrivere la prima parola in case sensitive
export const ContextProvider = ({ children }) => {
  const [selectedProductDetail, setSelectedProductDetail] = useState("");
  return (
    <GlobalContext.Provider
      value={{ selectedProductDetail, setSelectedProductDetail }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
