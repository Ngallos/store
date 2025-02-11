import { GlobalContext } from "../../context-service/global-contex";
import { ButtonCustom } from "../../components/button/button";
import { InputCustom } from "../../components/input/input";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { loginUser } from "../../context-service/dummyJson-api";
import "../login/login.css";
export const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const { isAuthenticated, setAuthenticated } = useContext(GlobalContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setError(false);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const token = await loginUser(username, password);
    if (token && token !== "invalid") {
      setToken(token);
      setAuthenticated(true);
      localStorage.setItem("token", token);
      navigate("/home");
    } else {
      setError("Dati errati");
    }
  };

  return (
    <div id="containerLogin">
      <div style={{ position: "absolute", top: "40px", fontSize: "40px" }}>
        Frignazzon
      </div>
      <div>
        <form onSubmit={handleLogin}>
          <div className="containerForm">
            <div>Login</div>
            <InputCustom
              value={username}
              type={"text"}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            ></InputCustom>
            <InputCustom
              value={password}
              type={"text"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></InputCustom>
            {error ? <p className="error">{error}</p> : ""}
            <div className="button">
              <ButtonCustom type={"submit"} title="Accedi"></ButtonCustom>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
