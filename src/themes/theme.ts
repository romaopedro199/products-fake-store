import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#027af2",
      "600": "#0059b3",
    },
    secondary: {
      main: "#05070a",
      "600": "#47536b",
    },
    background: { default: "#fcfcfc", paper: "#f5f6fa" },
    text: { primary: "#05070a", secondary: "#FFFFFF" },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#027af2",
      "600": "#0059b3",
    },
    secondary: {
      main: "#FFFFFF",
      "600": "#94a0b8",
    },
    background: { default: "#05070a", paper: "#0c1017" },
    text: { primary: "#FFFFFF", secondary: "#05070a" },
  },
});
