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
} from "../app/features/countrySlice";
import { Country } from "../types/country";
import { Stack } from "@mui/material";
import { AutocompleteField } from "../components/AutocompleteField";

export const CountryList = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectCountries);
  const selectedCountry = useAppSelector(selectCountrySelector);
  const loading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectIsError);

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
        <Stack justifyContent={"space-between"}>
          <AutocompleteField
            countries={countries.map((country) => country.name.official)}
            onSubmit={(value: string | null) => dispatch(selectCountry(value))}
          />
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
