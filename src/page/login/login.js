import { ButtonCustom } from "../../components/button/button";
import { InputCustom } from "../../components/input/input";
import { loginUser } from "../../context-service/dummyJson-api";
import { TokenContext } from "../../context-service/token";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../login/login.css";
export const Login = () => {
  const navigate = useNavigate();
  const { setToken, isAuthenticated } = useContext(TokenContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    setError(null);
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/home" />;
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
    <div className="authPage">
      <div className="authHero">
        <p className="eyebrow">Progetto didattico</p>
        <h1>Accedi al tuo store demo.</h1>
        <p>
          Una pagina di login essenziale, pensata per mostrare il flusso di autenticazione del progetto.
        </p>
      </div>
      <form className="authCard" onSubmit={handleLogin}>
        <h2>Login</h2>
        <InputCustom
          value={username}
          type={"text"}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputCustom
          value={password}
          type={"password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error ? <p className="error">{error}</p> : null}
        <div className="button">
          <ButtonCustom type={"submit"} title="Accedi" customClass="primaryButton" />
        </div>
      </form>
    </div>
  );
};
