import { SxProps } from "@mui/material";

export const buttonHoverStyles: SxProps = {
  bgcolor: "secondary.main",
  color: "text.secondary",
  borderRadius: 2,
  border: "1px solid",
  borderColor: "secondary.main",
  textTransform: "inherit",
  width: "fit-content",
  "&:hover": {
    bgcolor: "secondary.600",
    borderColor: "secondary.600",
  },
};
