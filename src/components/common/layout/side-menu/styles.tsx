import { drawerClasses, SxProps } from "@mui/material";

export const sideMenuDrawerStyles: SxProps = {
  display: { xs: "none", md: "block" },
  [`& .${drawerClasses.paper}`]: {
    backgroundColor: "background.paper",
  },
};

export const sideMenuSelectContentStyles: SxProps = {
  display: "flex",
  mt: "calc(var(--template-frame-height, 0px) + 4px)",
  p: 1.5,
};

export const sideMenuContentStyles: SxProps = {
  overflow: "auto",
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

export const sideMenuAvatarStackStyles: SxProps = {
  p: 2,
  gap: 1,
  alignItems: "center",
  borderTop: "1px solid",
  borderColor: "divider",
};

export const sideMenuAvatarStyles: SxProps = { width: 36, height: 36 };

export const sideMenuUserStyles: SxProps = { mr: "auto" };

export const sideMenuUserNameStyles: SxProps = {
  fontWeight: 500,
  lineHeight: "16px",
};
