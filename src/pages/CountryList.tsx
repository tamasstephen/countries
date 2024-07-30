import React from "react";
import { useGetCountries } from "../api/useGetCountries";
import { CountryCard } from "../components/CountryCard";
import Grid from "@mui/material/Grid";
import { StyledPageWrapper } from "../components/StyledPage";

export const CountryList = () => {
  const { countries, loading, error } = useGetCountries();

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <StyledPageWrapper>
      <Grid container spacing={4}>
        {countries?.map((country) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CountryCard country={country} />
            </Grid>
          );
        })}
      </Grid>
    </StyledPageWrapper>
  );
};
