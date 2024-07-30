import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { Country } from "../types/country";
import { FC } from "react";
import { CountryCardDetails } from "./CountryCardDetails";
import { StyledCountryCard } from "./StyledCountryCard";

interface CountryProps {
  country: Country;
}

export const CountryCard: FC<CountryProps> = ({
  country: { flags, name, population, capital, region },
}) => {
  return (
    <StyledCountryCard>
      <CardMedia
        sx={{ width: "100%", aspectRatio: 3 / 2 }}
        image={flags.svg}
        title={flags.alt}
      />
      <CardContent>
        <Typography
          sx={{
            height: 60,
            lineHeight: "110%",
            fontWeight: 700,
            fontSize: "1.125rem",
          }}
          variant="h6"
          component="div"
        >
          {name.official}
        </Typography>
        <CountryCardDetails title="Population" data={population} />
        <CountryCardDetails title="Region" data={region} />
        <CountryCardDetails title="Capital" data={capital} />
      </CardContent>
    </StyledCountryCard>
  );
};
