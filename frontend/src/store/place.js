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
