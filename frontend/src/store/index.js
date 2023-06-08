import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user";
import addPlaceReducer from "./addPlace";
import hostedPlaceReducer from "./place";
import bookingReducer from "./booking";

const store = configureStore({
  reducer: {
    user: userReducer,
    addPlace: addPlaceReducer,
    hostedPlace: hostedPlaceReducer,
    booking: bookingReducer,
  },
});

export default store;
