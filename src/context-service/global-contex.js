import React, { createContext, useState, useEffect } from "react";

//creazione del contesto
export const GlobalContext = createContext();

//Convenzione: scrivere la prima parola in case sensitive
export const ContextProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      setAuthenticated(true);
    } 
  }, [isAuthenticated, token]);

  return (
    <GlobalContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </GlobalContext.Provider>
  );
};
