import { ColorModeReducer } from "./states/colorMode";
import { configureStore } from "@reduxjs/toolkit";
import { DriverReducer } from "./states/driver";

const reduxStore = configureStore({
  reducer: {
    driver: DriverReducer,
    colorMode: ColorModeReducer,
  },
});

export { reduxStore };
