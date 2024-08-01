import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledPageWrapper = styled(Box)({
  padding: "2rem",
});

export const StyledCardDataTitle = styled("span")({
  fontWeight: 700,
  paddingRight: ".5rem",
  display: "inline-block",
});

export const StyledFlag = styled("img")({
  width: "100%",
  aspectRatio: 3 / 2,
});
