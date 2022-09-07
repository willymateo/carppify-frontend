import { ColorModeReducer } from "./states/colorMode";
import { configureStore } from "@reduxjs/toolkit";
import { SearchReducer } from "./states/search";

const reduxStore = configureStore({
  reducer: {
    search: SearchReducer,
    colorMode: ColorModeReducer,
  },
});

export { reduxStore };
