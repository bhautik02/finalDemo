import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user";
import addPlaceReducer from "./addPlace";
import placeSlice from "./place";
import bookingReducer from "./booking";
import reviewReducer from "./review";

const store = configureStore({
  reducer: {
    user: userReducer,
    addPlace: addPlaceReducer,
    place: placeSlice,
    booking: bookingReducer,
    review: reviewReducer,
  },
});

export default store;
