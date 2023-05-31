import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userRedux";

const store = configureStore({
  reducer: { user: userReducer },
});

// import { createStore } from "redux";
// import userReducer from "./reducers/userReducer";
// const store = createStore(userReducer);
export default store;
