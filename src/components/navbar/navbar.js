import { Navbar, Nav } from "rsuite";
import { ButtonCustom } from "../button/button";
import { useContext } from "react";
import { GlobalContext } from "../../context-service/global-contex";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
  const { isAuthenticated, setAuthenticated } = useContext(GlobalContext);
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
    navigate("/");
  };

  <Navbar>
    <Navbar.Brand href="#">RSUITE</Navbar.Brand>
    <Nav>
      <Nav.Item>Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Menu title="About">
        <Nav.Item>Company</Nav.Item>
        <Nav.Item>Team</Nav.Item>
        <Nav.Menu title="Contact">
          <Nav.Item>Via email</Nav.Item>
          <Nav.Item>Via telephone</Nav.Item>
        </Nav.Menu>
      </Nav.Menu>
    </Nav>
    <Nav>
      <ButtonCustom onClick={logout} title="Logout"></ButtonCustom>
    </Nav>
  </Navbar>;
};
