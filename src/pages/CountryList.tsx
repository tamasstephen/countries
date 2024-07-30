import React, { useEffect } from "react";
import { CountryCard } from "../components/CountryCard";
import Grid from "@mui/material/Grid";
import { StyledPageWrapper } from "../components/StyledPage";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  selectCountries,
  selectIsError,
  selectIsLoading,
  fetchCountries,
} from "../app/features/countrySlice";
import { Country } from "../types/country";

export const CountryList = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectCountries);
  const loading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectIsError);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  });

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (countries.length > 0) {
    return (
      <StyledPageWrapper>
        <Grid container spacing={4}>
          {countries.length > 0 &&
            countries.map((country: Country, idx: number) => {
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
