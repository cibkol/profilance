import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../components/LoginPopup/store/index.reducer";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
