import React, { useEffect, useMemo } from "react";
import { CountryCard } from "../components/CountryCard";
import Grid from "@mui/material/Grid";
import { StyledPageWrapper } from "../components/StyledPage";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  selectCountries,
  selectIsError,
  selectIsLoading,
  fetchCountries,
  selectCountrySelector,
  selectCountry,
  selectRegions,
  selectSelectedRegion,
  selectRegion,
} from "../app/features/countrySlice";
import { Country } from "../types/country";
import { FormControl, MenuItem, Stack, TextField } from "@mui/material";
import { AutocompleteField } from "../components/AutocompleteField";

export const CountryList = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectCountries);
  const selectedCountry = useAppSelector(selectCountrySelector);
  const loading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectIsError);
  const regions = useAppSelector(selectRegions);
  const selectedRegion = useAppSelector(selectSelectedRegion);

  const selectedCountries = useMemo(() => {
    if (selectedCountry) {
      return countries.filter(
        (country) => country.name.official === selectedCountry
      );
    }
    return countries;
  }, [selectedCountry, countries]);

  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries());
    }
  });

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (selectedCountries.length) {
    return (
      <StyledPageWrapper>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
        >
          <AutocompleteField
            countries={countries.map((country) => country.name.official)}
            onSubmit={(value: string | null) => dispatch(selectCountry(value))}
          />
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <TextField
              id="region-label"
              value={selectedRegion}
              label="Filter by regions"
              onChange={(event) => dispatch(selectRegion(event.target.value))}
              select
            >
              {regions.length &&
                regions.map((region, idx) => (
                  <MenuItem key={idx} value={region}>
                    {region}
                  </MenuItem>
                ))}
            </TextField>
          </FormControl>
        </Stack>
        <Grid container spacing={4}>
          {countries.length > 0 &&
            selectedCountries.map((country: Country, idx: number) => {
              return (
                <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                  <CountryCard country={country} />
                </Grid>
              );
            })}
        </Grid>
      </StyledPageWrapper>
    );
  }

  return <></>;
};
