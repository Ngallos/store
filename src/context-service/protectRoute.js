import { Navigate } from "react-router-dom";

export const ProtectRoute = ({ isAuthenticated, children }) => {
  // useEffect(() => {}, [isAuthenticated]);
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
};
