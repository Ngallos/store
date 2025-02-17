import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ProtectRoute } from "../context-service/protectRoute";
import { Login } from "../page/login/login";
import { Home } from "../page/home/home";
import { Landing } from "../page/landing/landing";
import { DetailProduct } from "../page/detail-product/detail-products";
import { useContext } from "react";
import { TokenContext } from "../context-service/token";
import { Cart } from "../page/cart/cart";

export const RoutesApplication = () => {
  const { isAuthenticated } = useContext(TokenContext);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        ></Route>
        <Route
          path={`/home/products/:id`}
          element={
            <ProtectRoute>
              <DetailProduct />
            </ProtectRoute>
          }
        />
        <Route
          path={`/cart`}
          element={
            <ProtectRoute>
              <Cart />
            </ProtectRoute>
          }
        />
      </Routes>
    </Router>
  );
};
