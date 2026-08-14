import { createSlice } from "@reduxjs/toolkit";

const cartFromStorage = () => {
  try {
    const raw = localStorage.getItem("cartItems");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const initialState = {
  selectedProduct: null,
  cartItems: cartFromStorage(),
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    addToCart(state, action) {
      const exists = state.cartItems.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { setSelectedProduct, addToCart, removeFromCart, clearCart } =
  appSlice.actions;
export default appSlice.reducer;
