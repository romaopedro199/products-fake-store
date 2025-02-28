import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuContent from "../menu-content";
import SelectContent from "../select-content";
import { Box } from "@mui/material";
import CardAlert from "../card-alert";
import {
  sideMenuMobileAvatarStackStyles,
  sideMenuMobileAvatarStyles,
  sideMenuMobileSelectContentStyles,
  sideMenuMobileStackStyles,
} from "./styles";

interface SideMenuMobileProps {
  open: boolean | undefined;
  toggleDrawer: (newOpen: boolean) => () => void;
}

export default function SideMenuMobile({
  open,
  toggleDrawer,
}: SideMenuMobileProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: "none",
          backgroundColor: "background.paper",
        },
      }}
    >
      <Stack sx={sideMenuMobileStackStyles}>
        <Box sx={sideMenuMobileSelectContentStyles}>
          <SelectContent />
        </Box>
        <Divider />
        <Stack direction="row" sx={{ p: 1, pb: 1, gap: 1 }}>
          <Stack direction="row" sx={sideMenuMobileAvatarStackStyles}>
            <Avatar
              sizes="small"
              alt="Custom Adm"
              src="/static/images/avatar/7.jpg"
              sx={sideMenuMobileAvatarStyles}
            />
            <Typography component="p" variant="h6">
              Custom Adm
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack sx={{ flexGrow: 1 }}>
          <MenuContent />
          <Divider />
        </Stack>
        <CardAlert />
        <Stack sx={{ p: 2 }}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<LogoutRoundedIcon />}
          >
            Logout
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  );
}
