import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    AddtoCart: (state, action) => {
      state.cart.push(action.payload);
    },
    RemoveItem: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload.id);
    },
    EmptyCart: (state, action) => {
      state.cart = state.cart.slice(0, state.cart.length);
    },
  },
});

export default CartSlice.reducer;
export const { AddtoCart, RemoveItem, EmptyCart } = CartSlice.actions;
