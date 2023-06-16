import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPlacesAsync = createAsyncThunk(
  "place/getAllPlaces",
  async () => {
    try {
      const response = await axios.get(`place/hostPlaces`);
      const allPlaces = response.data.hostedPlace;
      return allPlaces;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const getPlaceAsync = createAsyncThunk(
  "place/getPlace",
  async (placeId) => {
    try {
      const response = await axios.get(`place/${placeId}`);
      const placeData = response.data.place;
      return placeData;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

const InitialState = {
  allPlaces: null,
  placeData: null,
  bookedDatesOfPlace: null,
};

const placeSlice = createSlice({
  name: "place",
  initialState: InitialState,
  reducers: {
    getBookedDatesOfPlace(state, action) {
      state.bookedDatesOfPlace = action.payload;
      console.log("bookedDates", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPlacesAsync.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllPlacesAsync.fulfilled, (state, action) => {
        state.loading = true;
        state.allPlaces = action.payload;
      })
      .addCase(getAllPlacesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getPlaceAsync.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(getPlaceAsync.fulfilled, (state, action) => {
        state.loading = true;
        state.placeData = action.payload;
      })
      .addCase(getPlaceAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const placeActions = placeSlice.actions;
export default placeSlice.reducer;
