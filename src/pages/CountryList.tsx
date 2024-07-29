import React from "react";
import { useGetCountries } from "../api/useGetCountries";

export const CountryList = () => {
  const { countries, loading, error } = useGetCountries();

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      {countries?.map((country) => {
        return (
          <div>
            <div>{country.name.official}</div>
            <img src={country.flags.png} />
          </div>
        );
      })}
    </div>
  );
};
