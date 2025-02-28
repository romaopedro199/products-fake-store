import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useuseSnackbarStore } from "@/stores/snackbar-store";
import { Alert } from "@mui/material";

export default function CustomSnackbar() {
  const { vertical, horizontal, open, message, type, resetSnackbar } =
    useuseSnackbarStore();

  return (
    <Snackbar
      autoHideDuration={6000}
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={resetSnackbar}
      key={vertical + horizontal}
    >
      <Alert
        icon={<></>}
        onClose={resetSnackbar}
        severity={type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
