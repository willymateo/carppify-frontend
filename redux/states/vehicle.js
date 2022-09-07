import { createSlice } from "@reduxjs/toolkit";

const emptyState = {
  driver_id: null,
  plate: "",
  model: "",
  type: "",
  capacity: "",
};

const VehicleSlice = createSlice({
  name: "vehicle",
  initialState: emptyState,
  reducers: {
    createVehicle: ({ action }) => action.payload,
    setVehicle: (state, action) => ({ ...state, ...action.payload }),
    resetVehicle: () => emptyState,
  },
});

const { createVehicle, setVehicle, resetVehicle } = VehicleSlice.actions;
const VehicleReducer = VehicleSlice.reducer;

export { createVehicle, setVehicle, resetVehicle, VehicleReducer };
