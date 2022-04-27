import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";

const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const user = state.users.find((user) => user.login === payload.login);
      if (user) {
        if (user.password === payload.password) {
          alert("Добро пожаловать " + user.login);
          return { ...state, user };
        } else {
          alert("Пароль не правильный");
          return { ...state };
        }
      } else {
        alert("Пользователь не найден");
        return { ...state };
      }
    },
    logout: (state, { payload }) => {
      return {
        ...state,
        user: { id: 0, login: "Гость", password: "", role: 0 },
      };
    },
  },
});

export const { login, logout } = loginReducer.actions;
export default loginReducer.reducer;
