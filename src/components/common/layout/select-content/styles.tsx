import { selectClasses, SxProps } from "@mui/material";

export const selectContentStyles: SxProps = {
  maxHeight: 56,
  width: 215,
  "&.MuiList-root": {
    p: "8px",
  },
  [`& .${selectClasses.select}`]: {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    pl: 1,
  },
};

export const selectContentSubheaderStyles: SxProps = {
  pt: 0,
  color: "text.primary",
};

export const selectContentFontStyles: SxProps = { fontSize: "1rem" };
