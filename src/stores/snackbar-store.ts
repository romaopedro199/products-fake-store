import { create } from "zustand";

type useSnackbarStore = {
  vertical: "bottom";
  horizontal: "right";
  open: boolean;
  message: string;
  type: "success" | "info" | "warning" | "error";
  snackbar: (
    message: string,
    type: "success" | "info" | "warning" | "error"
  ) => void;
  resetSnackbar: () => void;
};

export const useuseSnackbarStore = create<useSnackbarStore>((set) => ({
  vertical: "bottom",
  horizontal: "right",
  open: false,
  message: "",
  type: "success",
  snackbar: (message, type = "success") =>
    set(() => ({ message, type, open: true })),
  resetSnackbar: () => set(() => ({ message: "", open: false })),
}));
