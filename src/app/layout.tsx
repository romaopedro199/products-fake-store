"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useThemeStore } from "@/stores/theme-store";
import { darkTheme, lightTheme } from "@/themes/theme";
import { Box, Stack } from "@mui/material";
import AppNavbar from "@/components/common/layout/app-navbar";
import SideMenu from "@/components/common/layout/side-menu";
import CustomSnackbar from "@/components/common/snackbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { darkMode } = useThemeStore();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Box display="flex">
            <SideMenu />
            <AppNavbar />
            <CustomSnackbar />
            <Box
              component="main"
              sx={(theme) => ({
                flexGrow: 1,
                backgroundColor: theme.palette.background.default,
                overflow: "auto",
              })}
            >
              <Stack
                spacing={2}
                sx={{
                  alignItems: "center",
                  px: 3,
                  py: { xs: 12, md: 5 },
                }}
              >
                {children}
              </Stack>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
