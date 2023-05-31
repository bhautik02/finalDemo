import { createSlice } from "@reduxjs/toolkit";

const InitialState = { hostPlaceData: {} };

const addPlaceSlice = createSlice({
  name: "User",
  initialState: InitialState,
  reducers: {
    addPlaceData(state, action) {
      // console.log("PAYLOAD :", action.payload);
      state.hostPlaceData = { ...state.hostPlaceData, ...action.payload };
      // console.log("state.hostPlaceData", { ...state.hostPlaceData });
    },
    clearPlaceData(state, action) {
      state.hostPlaceData = {};
    },
  },
});

export const addPlaceActions = addPlaceSlice.actions;
export default addPlaceSlice.reducer;
