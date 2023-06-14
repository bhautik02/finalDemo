import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const hostPlaceAsync = createAsyncThunk(
  "addPlace/hostPlaceAsync",
  async (formdata) => {
    try {
      const {
        title,
        address,
        description,
        noOfBathrooms,
        noOfBedrooms,
        maxGuest,
        checkIn,
        checkOut,
        price,
        perks,
        photo,
        userId,
      } = formdata;

      const response = await axios.post(`place/hostPlace/${userId}`, {
        title,
        address,
        description,
        noOfBathrooms,
        noOfBedrooms,
        maxGuest,
        checkIn,
        checkOut,
        price,
        perks,
        photo,
      });
      console.log("res", response);
      const hostedPlace = response.data.newHostedPlace;
      return hostedPlace;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const getAllHostedPlacesByUserAsync = createAsyncThunk(
  "addPlace/getAllHostedPlacesByUser",
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

const InitialState = {
  addPlace: {},
  allHostedData: null,
  yourHostedPlaces: null,
};

const addPlaceSlice = createSlice({
  name: "addPlace",
  initialState: InitialState,
  reducers: {
    addPlaceData(state, action) {
      state.addPlace = { ...state.addPlace, ...action.payload };
    },
    clearPlaceData(state, action) {
      state.addPlace = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hostPlaceAsync.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(hostPlaceAsync.fulfilled, (state, action) => {
        state.loading = true;
        // console.log("hALL==>", allHostedData);
        state.yourHostedPlaces = [...state.yourHostedPlaces, action.payload];
        console.log("old data", state.yourHostedPlaces);
        console.log("new data", action.payload);
      })
      .addCase(hostPlaceAsync.rejected, (state, action) => {
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

export const addPlaceActions = addPlaceSlice.actions;
export default addPlaceSlice.reducer;
