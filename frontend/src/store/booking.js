import { createSlice } from "@reduxjs/toolkit";

const bookingInitialState = { bookedDate: null };

const bookingSlice = createSlice({
  name: "Booking",
  initialState: bookingInitialState,
  reducers: {
    selectedDate(state, action) {
      state.bookedDate = action.payload;
    },
  },
});

export const bookingActions = bookingSlice.actions;
export default bookingSlice.reducer;
