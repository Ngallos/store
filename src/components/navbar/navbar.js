import { Navbar, Nav } from "rsuite";
import { ButtonCustom } from "../button/button";
import { useContext } from "react";
import frignanoLogo from "../../assets/frignano.webp";
import "../navbar/navbar.css";
import { TokenContext } from "../../context-service/token";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const { setToken, isAuthenticated } = useContext(TokenContext);

  const logout = () => {
    localStorage.clear();
    setToken();
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
    <Navbar>
      <Navbar.Brand href="#">
        <img className="img" src={frignanoLogo} alt="" />
      </Navbar.Brand>
      <Nav>
        {routeLists.map((router, index) => {
          return (
            <Nav.Item key={index} onClick={() => navigate(router.path)}>
              {router.name}
            </Nav.Item>
          );
        })}
      </Nav>
      <Nav>
        <ButtonCustom onClick={logout} title="Logout"></ButtonCustom>
      </Nav>
    </Navbar>
  );
};
