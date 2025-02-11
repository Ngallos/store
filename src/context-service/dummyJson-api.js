import axios from "axios";
const API = "https://dummyjson.com";

export const loginUser = async (username, password) => {
  const dataUser = {
    username,
    password,
  };

  try {
    if (dataUser) {
      const response = await axios.post(`${API}/auth/login`, dataUser);
      return response.data.accessToken; // Assicurati che il campo corretto sia 'token' o 'accessToken'
    }
  } catch (error) {
    return null; // Ritorna null in caso di errore
  }
};

const dummyService = () => {
  loginUser();
};

export default dummyService();
