import { useParams } from "react-router-dom";
import {
  selectCountryPageData,
  selectCountriesByCCA3,
} from "../app/features/countrySlice";
import { useAppSelector } from "../app/hooks";
import { Card, Stack, Typography } from "@mui/material";
import { CountryCardDetails } from "../components/CountryCardDetails";

export const CountryPage = () => {
  const { country } = useParams();
  const selectedCountry = useAppSelector((state) =>
    selectCountryPageData(state, country as string)
  );
  const borderCountries = useAppSelector((state) =>
    selectCountriesByCCA3(state, selectedCountry?.borders || [])
  );

  if (!selectedCountry) {
    return <></>;
  }

  return (
    <div>
      <Stack>
        <div>
          <img src={selectedCountry.flags.svg} />
        </div>
        <Stack>
          <Typography variant="h1">{selectedCountry.name.official}</Typography>

          <Stack>
            <Stack>
              <Stack>
                <CountryCardDetails
                  title="Native name"
                  data={
                    Object.values(selectedCountry?.name.nativeName)[0].official
                  }
                />
                <CountryCardDetails
                  title="Population"
                  data={selectedCountry.population}
                />
                <CountryCardDetails
                  title="Population"
                  data={selectedCountry.region}
                />
                <CountryCardDetails
                  title="Population"
                  data={selectedCountry.subregion}
                />
                <CountryCardDetails
                  title="Capital"
                  data={selectedCountry.capital}
                />
              </Stack>
              <Stack>
                <CountryCardDetails
                  title="Top Level Domain"
                  data={selectedCountry.tld.join(", ")}
                />
                <CountryCardDetails
                  title="Currencies"
                  data={Object.values(selectedCountry.currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
                />
                <CountryCardDetails
                  title="Languages"
                  data={Object.values(selectedCountry.languages).join(", ")}
                />
              </Stack>
            </Stack>
            {borderCountries &&
              borderCountries.map((country) => (
                <Card>{country?.name.official}</Card>
              ))}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};
