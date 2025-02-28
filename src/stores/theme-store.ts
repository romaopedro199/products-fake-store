import { create } from "zustand";

type ThemeStore = {
  darkMode: boolean;
  toggleTheme: (param: boolean) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  darkMode: true,
  toggleTheme: (darkMode) => set(() => ({ darkMode })),
}));
