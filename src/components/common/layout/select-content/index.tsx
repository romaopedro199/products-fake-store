import * as React from "react";
import MuiAvatar from "@mui/material/Avatar";
import MuiListItemAvatar from "@mui/material/ListItemAvatar";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkModeRounded";
import LightModeIcon from "@mui/icons-material/LightModeRounded";
import { useThemeStore } from "@/stores/theme-store";
import {
  selectContentFontStyles,
  selectContentStyles,
  selectContentSubheaderStyles,
} from "./styles";

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: 28,
  height: 28,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
}));

const ListItemAvatar = styled(MuiListItemAvatar)({
  minWidth: 0,
  marginRight: 12,
});

export default function SelectContent() {
  const { darkMode, toggleTheme } = useThemeStore();

  const handleChange = (event: SelectChangeEvent) => {
    toggleTheme(!!event.target.value);
  };

  return (
    <Select
      labelId="company-select"
      id="company-simple-select"
      value={darkMode ? "1" : ""}
      onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Select company" }}
      fullWidth
      sx={selectContentStyles}
    >
      <ListSubheader sx={selectContentSubheaderStyles}>
        Select Theme
      </ListSubheader>
      <MenuItem value="">
        <ListItemAvatar>
          <Avatar alt="Sitemark web">
            <LightModeIcon sx={selectContentFontStyles} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Light Mode" />
      </MenuItem>
      <MenuItem value="1">
        <ListItemAvatar>
          <Avatar alt="Sitemark App">
            <DarkModeIcon sx={selectContentFontStyles} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Dark Mode" />
      </MenuItem>
    </Select>
  );
}
