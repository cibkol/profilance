import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../components/LoginPopup/slice/index.reducer";
import newsReducer from "../pages/NewsPage/slice/index.reducer";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    news: newsReducer,
  },
});
