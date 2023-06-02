import { createSlice } from "@reduxjs/toolkit";

const InitialState = { addPlace: {} };

const addPlaceSlice = createSlice({
  name: "Place",
  initialState: InitialState,
  reducers: {
    addPlaceData(state, action) {
      // console.log("PAYLOAD :", action.payload);
      state.addPlace = { ...state.addPlace, ...action.payload };
      // console.log("state.hostPlaceData", { ...state.hostPlaceData });
    },
    clearPlaceData(state, action) {
      state.addPlace = {};
    },
  },
});

export const addPlaceActions = addPlaceSlice.actions;
export default addPlaceSlice.reducer;
