import { Stack, Typography } from "@mui/material";
import { StyledCardDataTitle } from "./StyledPage";

interface CountryCardDetailProps {
  title: string;
  data: string | number;
}

export const CountryCardDetails = ({ title, data }: CountryCardDetailProps) => {
  return (
    <Stack>
      <Typography>
        <StyledCardDataTitle>{title}:</StyledCardDataTitle>
        {data}
      </Typography>
    </Stack>
  );
};
