import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ThemeState {
  theme: "dark" | "light";
}

const initialThemeState: ThemeState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const selectTheme = (state: RootState) => state.theme.theme;

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
