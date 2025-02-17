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

const getAllCategory = async () => {
  try {
    const response = await axios.get(`${API}/products/category-list`);
    return response.data;
  } catch (error) {
    return null;
  }
};

const getProductsByCategory = async (categorySelected) => {
  try {
    const response = await axios.get(
      `${API}/products/category/${categorySelected}`
    );
    return response.data.products;
  } catch (error) {
    return null;
  }
};

const getDetailProduct = async (productID) => {
  try {
    const response = await axios.get(`${API}/products/${productID}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const dummyService = {
  loginUser,
  getAllCategory,
  getProductsByCategory,
  getDetailProduct
};
