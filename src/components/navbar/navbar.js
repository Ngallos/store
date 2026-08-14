import { Navbar, Nav } from "rsuite";
import { ButtonCustom } from "../button/button";
import { useContext } from "react";
import frignanoLogo from "../../assets/frignano.webp";
import "../navbar/navbar.css";
import { TokenContext } from "../../context-service/token";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const navigate = useNavigate();
  const { setToken, isAuthenticated } = useContext(TokenContext);
  const cartCount = useSelector((state) => state.app.cartItems.length);

  const logout = () => {
    localStorage.clear();
    setToken(null);
    navigate("/login");
  };

  const routeLists = isAuthenticated
    ? [
        { name: "Home", path: "/home" },
        { name: "Carrello", path: "/cart" },
      ]
    : [
        { name: "login", path: "/login" }, // Solo login per utenti non autenticati
      ];

  return (
    <Navbar className="topbar">
      <Navbar.Brand href="#" className="brandBox">
        <img className="img" src={frignanoLogo} alt="Frignano" />
        <div>
          <div className="brandTitle">Frignano Store</div>
          <div className="brandSubtitle">React didattico</div>
        </div>
      </Navbar.Brand>
      <Nav className="navLinks">
        {routeLists.map((router, index) => {
          return (
            <Nav.Item key={index} onClick={() => navigate(router.path)}>
              {router.name === "Carrello"
                ? `${router.name} (${cartCount})`
                : router.name}
            </Nav.Item>
          );
        })}
      </Nav>
      <Nav className="navActions">
        <ButtonCustom onClick={logout} title="Logout" customClass="logoutButton"></ButtonCustom>
      </Nav>
    </Navbar>
  );
};
