import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../ReduxCart/CartSlice";

export default configureStore({
  reducer: {
    Cart: CartSlice,
  },
});
