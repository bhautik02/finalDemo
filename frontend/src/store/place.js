import { createSlice } from "@reduxjs/toolkit";

const InitialState = { yourHostedPlace: [], allHostedPlaces: null };

const hostedPlaceSlice = createSlice({
  name: "HostedPlace",
  initialState: InitialState,
  reducers: {
    hostingData(state, action) {
      // state.yourHostedPlace = [...state.yourHostedPlace, action.payload];
      console.log("yourHostedPlace ---------->", state.yourHostedPlace);
      console.log("yourHostedPnjihiuh8lace ---------->", action.payload);
      state.yourHostedPlace = action.payload;

      // if (state.yourHostedPlace.length === 0) {
      // } else {
      //   state.yourHostedPlace = [state.yourHostedPlace, action.payload];
      // }

      console.log(state.yourHostedPlace);
    },
    allHostingData(state, action) {
      state.allHostedPlaces = action.payload;
      // console.log("state.yourHostedPlace", state.yourHostedPlace);
    },
  },
});

export const hostedPlaceActions = hostedPlaceSlice.actions;
export default hostedPlaceSlice.reducer;

/*

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPlacesAsync = createAsyncThunk(
  "place/getAllPlaces",
  async () => {
    // Make an API request to log in the user and obtain the token
    // console.log(email, password);
    const response = await axios.post(`place/hostPlaces`);
    console.log(response);
    console.log(
      "----------------------------------------->"
      // response.data.user
    );
    return;
    // return response.data.user;
    // if (!response.ok) {
    //   throw new Error("Login failed");
    // }
  }
);

const initialState = { data: null };

// const InitialState = { yourHostedPlace: [], allHostedPlaces: null };

const hostedPlaceSlice = createSlice({
  name: "place",
  initialState: initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPlacesAsync.pending, (state) => {
        // Update the state to indicate that login is in progress
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllPlacesAsync.fulfilled, (state, action) => {
        // Update the state with the user data received from the API
        state.loading = true;
        state.data = { ...state.payload };
      })
      .addCase(getAllPlacesAsync.rejected, (state, action) => {
        // Update the state to handle the login failure
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const hostedPlaceActions = hostedPlaceSlice.actions;
export default hostedPlaceSlice.reducer;


*/
