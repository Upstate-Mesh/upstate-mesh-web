import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "@tanstack/react-router";

import ButtonLink from "./ButtonLink";

interface NavItem {
  label: string;
  to: string;
  mobile?: boolean;
}

const navItems: ReadonlyArray<NavItem> = [
  {
    label: "Home",
    to: "/",
    mobile: true,
  },
  {
    label: "Learn",
    to: "/learn",
  },
  {
    label: "Join",
    to: "/join",
  },
  {
    label: "Similar Networks",
    to: "/similar-networks",
  },
];

export default function Nav() {
  const navigate = useNavigate();
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const [menuOpen, setMenuOpen] = useState(false);

  if (desktop) {
    return (
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {navItems
          .filter((navItem) => !navItem.mobile)
          .map((navItem) => (
            <ButtonLink key={navItem.label} to={navItem.to}>
              {navItem.label}
            </ButtonLink>
          ))}
      </Stack>
    );
  }

  return (
    <>
      <IconButton
        aria-label={`menu ${menuOpen ? "open" : "close"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpen={() => setMenuOpen(true)}
      >
        <Box
          sx={{ width: "75vw" }}
          role="presentation"
          onClick={() => setMenuOpen(false)}
          onKeyDown={() => setMenuOpen(false)}
        >
          <List>
            {navItems.map((navItem) => (
              <ListItem key={navItem.label} disablePadding>
                <ListItemButton onClick={() => navigate({ to: navItem.to })}>
                  <ListItemText primary={navItem.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
