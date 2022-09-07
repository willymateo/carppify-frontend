import { createSlice } from "@reduxjs/toolkit";

const emptyState = {
  driver_id: null,
  vehicles: [],
};

const DriverSlice = createSlice({
  name: "driver",
  initialState: emptyState,
  reducers: {
    createDriver: ({ action }) => action.payload,
    setDriver: (state, action) => ({ ...state, ...action.payload }),
    resetDriver: () => emptyState,
  },
});

const { createDriver, setDriver, resetDriver } = DriverSlice.actions;
const DriverReducer = DriverSlice.reducer;

export { createDriver, setDriver, resetDriver, DriverReducer };
