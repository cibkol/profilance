export const initialState = {
  users: [
    {
      id: 1,
      login: "admin",
      password: "strongPassword123",
      role: 2,
    },
    {
      id: 2,
      login: "user",
      password: "password321",
      role: 1,
    },
  ],
  user: { id: 0, login: "Гость", password: "", role: 0 },
};
