import { configureStore } from "@reduxjs/toolkit";

import countryReducer from "./features/countrySlice";
import themeReducer from "./features/themeSlice";

const store = configureStore({
  reducer: {
    countries: countryReducer,
    theme: themeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
