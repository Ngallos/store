import { ButtonCustom } from "../../components/button/button";
import { InputCustom } from "../../components/input/input";
import { loginUser } from "../../context-service/dummyJson-api";
import { TokenContext } from "../../context-service/token";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../login/login.css";
export const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const { setToken, isAuthenticated } = useContext(TokenContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    setError(false);
  }, []);

 if (isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };



  const handleLogin = async (e) => {
    e.preventDefault();
    const token = await loginUser(username, password);
    if (token && token !== "invalid") {
      login(token);
      navigate("/home");
    } else {
      setError("Dati erratis");
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
