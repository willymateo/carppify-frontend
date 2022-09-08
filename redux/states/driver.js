import { createSlice } from "@reduxjs/toolkit";

const emptyState = {
  id: null,
  city: null,
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  avatar_url: "",
  status: "",
  creation_date: "",
  company: {
    id: null,
    name: "",
    city: null,
    status: "",
    plan_type: "",
    creation_date: "",
  },
  num_vehicles: 0,
  offset: 0,
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
