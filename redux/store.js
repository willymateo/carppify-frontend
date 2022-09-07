import { ColorModeReducer } from "./states/colorMode";
import { configureStore } from "@reduxjs/toolkit";
import { VehicleReducer } from "./states/vehicle";
import { DriverReducer } from "./states/driver";

const reduxStore = configureStore({
  reducer: {
    driver: DriverReducer,
    vehicle: VehicleReducer,
    colorMode: ColorModeReducer,
  },
});

export { reduxStore };
