import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user";
import addPlaceReducer from "./addPlace";
import hostedPlaceReducer from "./place";

const store = configureStore({
  reducer: {
    user: userReducer,
    addPlace: addPlaceReducer,
    hostedPlace: hostedPlaceReducer,
  },
});

export default store;
