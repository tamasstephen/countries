import { Autocomplete, TextField } from "@mui/material";

interface AutocompleteProps {
  countries: string[];
  onSubmit: (value: string | null) => void;
}

export const AutocompleteField = ({
  countries,
  onSubmit,
}: AutocompleteProps) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box"
      options={countries}
      onChange={(_, value) => onSubmit(value)}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Select a country" />
      )}
    />
  );
};
