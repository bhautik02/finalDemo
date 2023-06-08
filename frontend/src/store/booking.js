import { createSlice } from "@reduxjs/toolkit";

const bookingInitialState = { bookedDate: null, bookingData: null };

const bookingSlice = createSlice({
  name: "Booking",
  initialState: bookingInitialState,
  reducers: {
    bookedDate(state, action) {
      state.bookedDate = action.payload;
    },
    bookingData(state, action) {
      state.bookingData = action.payload;
    },
  },
});

export const bookingActions = bookingSlice.actions;
export default bookingSlice.reducer;
