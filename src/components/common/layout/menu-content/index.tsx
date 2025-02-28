import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InventoryIcon from "@mui/icons-material/Inventory";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { menuContentBlockStyles, menuContentMainStackStyles } from "./styles";
import { useRouter } from "next/navigation";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon /> },
  { text: "Products", icon: <InventoryIcon /> },
  { text: "Orders", icon: <ShoppingCartIcon /> },
  { text: "Analytics", icon: <AnalyticsRoundedIcon /> },
  { text: "Clients", icon: <PeopleRoundedIcon /> },
];

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon /> },
  { text: "About", icon: <InfoRoundedIcon /> },
  { text: "Feedback", icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  const router = useRouter();

  const handleGoToProductsList = () => {
    router.push("/products");
  };

  return (
    <Stack sx={menuContentMainStackStyles}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={menuContentBlockStyles}>
            <ListItemButton
              selected={index === 1}
              onClick={handleGoToProductsList}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={menuContentBlockStyles}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
