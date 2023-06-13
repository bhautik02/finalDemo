import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const bookPlaceAsync = createAsyncThunk(
  "book/bookPlace",
  async (formData) => {
    try {
      const response = await axios.post(`book/bookings`, formData);
      const newBooking = response.data.hostedPlace;
      return alert("new booking");
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const getAllbookingAsync = createAsyncThunk(
  "book/getAllbooking",
  async (userId) => {
    try {
      const response = await axios.get(`book/bookings/${userId}`);
      console.log(response);
      const allBookings = response.data.bookings;
      return allBookings;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

const InitialBookingState = {
  allBookings: null,
};

const bookingSlice = createSlice({
  name: "book",
  initialState: InitialBookingState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookPlaceAsync.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(bookPlaceAsync.fulfilled, (state, action) => {
        state.loading = true;
        // console.log("state", state.allBookings);
        // state.allBookings = action.payload;
        // console.log("state", action.payload);
      })
      .addCase(bookPlaceAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllbookingAsync.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllbookingAsync.fulfilled, (state, action) => {
        state.loading = true;
        state.allBookings = action.payload;
      })
      .addCase(getAllbookingAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const bookingActions = bookingSlice.actions;
export default bookingSlice.reducer;
