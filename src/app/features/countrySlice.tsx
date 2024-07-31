import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";
import { Country } from "../../types/country";
import axios from "axios";
import { RootState } from "../store";

export interface CountryState {
  countries: Country[];
  loading: boolean;
  error: boolean;
  selectedCountry: string | null;
  selectedRegion: string;
}

const initialState: CountryState = {
  countries: [],
  loading: false,
  error: false,
  selectedCountry: null,
  selectedRegion: "",
};

export const countrySlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    selectRegion: (state, action: PayloadAction<string>) => {
      state.selectedRegion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCountries.fulfilled,
        (state, action: PayloadAction<Country[]>) => {
          state.countries = action.payload;
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

export const { selectCountry, selectRegion } = countrySlice.actions;

export const selectCountries = (state: RootState) =>
  !state.countries.selectedRegion || state.countries.selectedRegion === "All"
    ? state.countries.countries
    : state.countries.countries.filter(
        (country: Country) => country.region === state.countries.selectedRegion
      );
export const selectAllCountries = (state: RootState) =>
  state.countries.countries;
export const selectIsLoading = (state: RootState) => state.countries.loading;
export const selectIsError = (state: RootState) => state.countries.error;
export const selectCountrySelector = (state: RootState) =>
  state.countries.selectedCountry;
export const selectRegions = createSelector(
  [selectAllCountries],
  (countries) => [
    ...new Set(["All", ...countries.map((country: Country) => country.region)]),
  ]
);
export const selectSelectedRegion = (state: RootState) =>
  state.countries.selectedRegion;

export default countrySlice.reducer;
