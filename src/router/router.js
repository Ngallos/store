import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalContext } from "../context-service/global-contex";
import { ProtectRoute } from "../context-service/protectRoute";
import { Login } from "../page/login/login";
import { Home } from "../page/home/home";
import { useContext, useEffect } from "react";
import { NavBar } from "../components/navbar/navbar";

export const RoutesApplication = () => {
  const { isAuthenticated } = useContext(GlobalContext);

  useEffect(() => {
  }, [isAuthenticated]);

  return (
    <Router>
      {isAuthenticated && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectRoute>
          }
        ></Route>
      </Routes>
    </Router>
  );
};
