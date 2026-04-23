import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    addUser: (state, action) => {
      // Add new user with unique ID
      state.list.push({
        id: Date.now(),
        name: action.payload,
      });
    },
    deleteUser: (state, action) => {
      // Delete user by id
      state.list = state.list.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;