import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MenuContent from "../menu-content";
import SelectContent from "../select-content";
import OptionsMenu from "../options-menu";
import CardAlert from "../card-alert";
import {
  sideMenuAvatarStackStyles,
  sideMenuAvatarStyles,
  sideMenuContentStyles,
  sideMenuDrawerStyles,
  sideMenuSelectContentStyles,
  sideMenuUserNameStyles,
  sideMenuUserStyles,
} from "./styles";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function SideMenu() {
  return (
    <Drawer variant="permanent" sx={sideMenuDrawerStyles}>
      <Box sx={sideMenuSelectContentStyles}>
        <SelectContent />
      </Box>
      <Divider />
      <Box sx={sideMenuContentStyles}>
        <MenuContent />
        <CardAlert />
      </Box>
      <Stack direction="row" sx={sideMenuAvatarStackStyles}>
        <Avatar
          sizes="small"
          alt="Custom Adm"
          src="/static/images/avatar/7.jpg"
          sx={sideMenuAvatarStyles}
        />
        <Box sx={sideMenuUserStyles}>
          <Typography variant="body2" sx={sideMenuUserNameStyles}>
            Custom Adm
          </Typography>
          <Typography variant="caption">cadm@email.com</Typography>
        </Box>
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}
