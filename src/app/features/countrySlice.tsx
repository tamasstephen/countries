import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../../types/country";
import axios from "axios";
import { RootState } from "../store";

export interface CountryState {
  countries: Country[];
  loading: boolean;
  error: boolean;
}

const initialState: CountryState = {
  countries: [],
  loading: false,
  error: false,
};

export const countrySlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCountries.fulfilled,
        (state, action: PayloadAction<Country[]>) => {
          state.countries.push(...action.payload);
          state.loading = false;
          state.error = false;
        }
      )
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.error = true;
      });
  },
});

export const fetchCountries = createAsyncThunk<Country[]>(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  }
);

export const selectCountries = (state: RootState) => state.countries.countries;
export const selectIsLoading = (state: RootState) => state.countries.loading;
export const selectIsError = (state: RootState) => state.countries.error;

export default countrySlice.reducer;
