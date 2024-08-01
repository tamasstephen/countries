import { Stack } from "@mui/material";
import { CountryCardDetails } from "./CountryCardDetails";

interface CountryPageDetailsProps {
  details: { title: string; data: string | number }[];
}

export const CountryPageDetails = ({ details }: CountryPageDetailsProps) => {
  return (
    <Stack>
      {details.map(({ title, data }) => (
        <CountryCardDetails title={title} data={data} />
      ))}
    </Stack>
  );
};
