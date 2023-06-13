import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createReviewAsync = createAsyncThunk(
  "review/createReview",
  async (bookingID, reviewFormData) => {
    try {
      console.log("formData-------->", reviewFormData);
      const response = await axios.post(
        `review/reviews/${bookingID}`,
        ...reviewFormData
      );
      const review = response.data.review;
      console.log("review", review);
      alert("review added");
      return review;
    } catch (error) {
      return alert(error.response.data.message);
    }
  }
);

export const getAllHostedPlacesByUserAsync = createAsyncThunk(
  "place/getAllHostedPlacesByUser",
  async (userId) => {
    try {
      const response = await axios.get(`place/hostPlace/${userId}`);
      const getAllHostedPlacesByUser = response.data.hostedPlace;
      return getAllHostedPlacesByUser;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

const InitialState = {};

const reviewSlice = createSlice({
  name: "review",
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReviewAsync.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createReviewAsync.fulfilled, (state, action) => {
        state.loading = true;
        state.allPlaces = action.payload;
      })
      .addCase(createReviewAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllHostedPlacesByUserAsync.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllHostedPlacesByUserAsync.fulfilled, (state, action) => {
        state.loading = true;
        state.yourHostedPlaces = action.payload;
      })
      .addCase(getAllHostedPlacesByUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const reviewActions = reviewSlice.actions;
export default reviewSlice.reducer;
