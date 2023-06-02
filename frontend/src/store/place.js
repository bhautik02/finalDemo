import { createSlice } from "@reduxjs/toolkit";

const InitialState = { yourHostedPlace: null, allHostedPlaces: null };

const hostedPlaceSlice = createSlice({
  name: "HostedPlace",
  initialState: InitialState,
  reducers: {
    hostingData(state, action) {
      state.yourHostedPlace = action.payload;
    },
    allHostingData(state, action) {
      state.allHostedPlaces = action.payload;
      // console.log("state.yourHostedPlace", state.yourHostedPlace);
    },
  },
});

export const hostedPlaceActions = hostedPlaceSlice.actions;
export default hostedPlaceSlice.reducer;
