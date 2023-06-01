import { createSlice } from "@reduxjs/toolkit";

const userInitialState = { user: null, isUserLoggedIn: false, isReady: false };

const userSlice = createSlice({
  name: "User",
  initialState: userInitialState,
  reducers: {
    userData(state, action) {
      state.user = action.payload;
    },
    ready(state) {
      state.isReady = true;
    },
    login(state) {
      state.isUserLoggedIn = true;
      state.isReady = true;
    },
    logout(state) {
      state.isUserLoggedIn = false;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
