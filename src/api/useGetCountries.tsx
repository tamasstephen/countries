import { useState, useEffect } from "react";
import axios from "axios";
import { Countries, CountriesData } from "../types/country";

export const useGetCountries = (): CountriesData => {
  const [countries, setCountries] = useState<Countries>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCountries = async () => {
    setIsLoading(true);
    const data = await axios.get("https://restcountries.com/v3.1/all");
    if (data) {
      console.log(data.data);
      setCountries(data.data);
      setIsLoading(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return { countries, loading: isLoading, error };
};
