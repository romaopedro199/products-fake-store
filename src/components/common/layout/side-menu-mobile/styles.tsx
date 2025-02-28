import { SxProps } from "@mui/material";

export const sideMenuMobileStackStyles: SxProps = {
  maxWidth: "70dvw",
  height: "100%",
};

export const sideMenuMobileSelectContentStyles: SxProps = {
  display: "flex",
  mt: "calc(var(--template-frame-height, 0px) + 4px)",
  p: 1.5,
};

export const sideMenuMobileAvatarStackStyles: SxProps = {
  gap: 1,
  alignItems: "center",
  flexGrow: 1,
  p: 1,
};

export const sideMenuMobileAvatarStyles: SxProps = { width: 24, height: 24 };
