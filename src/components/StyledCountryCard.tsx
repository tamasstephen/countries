import Card from "@mui/material/Card";
import { styled } from "@mui/system";

export const StyledCountryCard = styled(Card)(({ theme }) => ({
  height: 420,
  boxShadow: "0px 8px 17px 0px rgba(0,0,0,0.12)",
  maxWidth: 320,
  minWidth: 300,
  borderRadius: 5,
  // Styles for small screens (sm and up)
  [theme.breakpoints.up("sm")]: {
    height: 600,
    maxWidth: "100%",
  },
  // Styles for medium screens (md and up)
  [theme.breakpoints.up("md")]: {
    height: 420,
  },
  // Styles for large screens (lg and up)
  [theme.breakpoints.up("lg")]: {
    height: 420,
  },
  // Styles for extra-large screens (xl and up)
  [theme.breakpoints.up("xl")]: {
    height: 420,
  },
}));
