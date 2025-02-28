import { SxProps } from "@mui/material";

export const appbarContainerStyles: SxProps = {
  display: { xs: "auto", md: "none" },
  boxShadow: 0,
  bgcolor: "background.paper",
  backgroundImage: "none",
  borderBottom: "1px solid",
  borderColor: "divider",
  top: "var(--template-frame-height, 0px)",
};

export const appbarMainStackStyles: SxProps = {
  alignItems: "center",
  justifyContent: "flex-end",
  flexGrow: 1,
  width: "100%",
  gap: 1,
};

export const appbarRowStackStyles: SxProps = {
  justifyContent: "center",
  mr: "auto",
};

export const customIconStyles: SxProps = {
  width: "1.5rem",
  height: "1.5rem",
  bgcolor: "black",
  borderRadius: "999px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  backgroundImage:
    "linear-gradient(135deg, hsl(210, 98%, 60%) 0%, hsl(210, 100%, 35%) 100%)",
  color: "hsla(210, 100%, 95%, 0.9)",
  border: "1px solid",
  borderColor: "hsl(210, 100%, 55%)",
  boxShadow: "inset 0 2px 5px rgba(255, 255, 255, 0.3)",
};
