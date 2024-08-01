import { useParams } from "react-router-dom";
import {
  selectCountryPageData,
  selectCountriesByCCA3,
} from "../app/features/countrySlice";
import { useAppSelector } from "../app/hooks";
import { Box, Card, Stack, Typography } from "@mui/material";
import { CountryPageDetails } from "../components/CountryPageDetails";
import { StyledFlag, StyledPageWrapper } from "../components/StyledPage";

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

  const countryDetails = {
    firstColumn: [
      {
        title: "Native name",
        data: Object.values(selectedCountry?.name.nativeName)[0].official,
      },
      {
        title: "Population",
        data: selectedCountry.population,
      },
      {
        title: "Region",
        data: selectedCountry.region,
      },
      {
        title: "Subregion",
        data: selectedCountry.subregion,
      },
      {
        title: "Capital",
        data: selectedCountry.capital,
      },
    ],
    secondColumn: [
      {
        title: "Top Level Domain",
        data: selectedCountry.tld.join(", "),
      },
      {
        title: "Currencies",
        data: Object.values(selectedCountry.currencies)
          .map((currency) => currency.name)
          .join(", "),
      },
      {
        title: "Languages",
        data: Object.values(selectedCountry.languages).join(", "),
      },
    ],
  };

  return (
    <StyledPageWrapper>
      <Box
        sx={{
          display: {
            md: "flex",
            justifyContent: "center",
          },
          marginTop: { lg: "4rem" },
        }}
      >
        <Box
          sx={{
            width: { md: "40%", lg: "35%" },
            paddingRight: { md: "2rem", lg: "6rem" },
          }}
        >
          <StyledFlag src={selectedCountry.flags.svg} />
        </Box>
        <Stack>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.5rem" },
              fontWeight: 700,
              lineHeight: "100%",
              paddingTop: { xs: "2rem", lg: 0 },
            }}
          >
            {selectedCountry.name.official}
          </Typography>
          <Stack>
            <Box
              sx={{
                paddingTop: "1rem",
                display: { lg: "grid" },
                gridTemplateColumns: { lg: "repeat(2, 1fr)" },
                gap: "1rem",
              }}
            >
              <Stack
                sx={{ paddingBottom: "2rem", paddingRight: { lg: "1rem" } }}
              >
                <CountryPageDetails details={countryDetails.firstColumn} />
              </Stack>
              <Stack>
                <CountryPageDetails details={countryDetails.secondColumn} />
              </Stack>
            </Box>
            {borderCountries.length && (
              <Box>
                <Typography sx={{ fontWeight: 700, paddingY: "1.5rem" }}>
                  Border Countries:
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 500,
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(100px, 1fr))",
                    gap: 2,
                  }}
                >
                  {borderCountries.map((country, idx) => (
                    <Card
                      key={idx}
                      sx={{
                        padding: ".5rem",
                        borderRadius: 2,
                        boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid #E5E4E2",
                      }}
                    >
                      <Typography sx={{ lineHeight: "130%" }}>
                        {country?.name.common}
                      </Typography>
                    </Card>
                  ))}
                </Box>
              </Box>
            )}
          </Stack>
        </Stack>
      </Box>
    </StyledPageWrapper>
  );
};
