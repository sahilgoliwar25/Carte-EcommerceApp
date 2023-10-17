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
  },
});

export default CartSlice.reducer;
export const { AddtoCart, RemoveItem } = CartSlice.actions;
