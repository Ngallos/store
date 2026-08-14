import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { TokenContext } from "./token";
import { NavBar } from "../components/navbar/navbar";
export const ProtectRoute = ({ children }) => {
  const { isAuthenticated } = useContext(TokenContext);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <NavBar />
          {children}
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};
