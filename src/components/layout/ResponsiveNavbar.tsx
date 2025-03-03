import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Button,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const pages = [
  { title: "Home", path: "/" },
  { title: "Menu", path: "/menu" },
  { title: "About", path: "/about" },
  { title: "Booking", path: "/booking" },
  { title: "Contact", path: "/contact" },
];

const ResponsiveNavbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
        <img src="placeholder.png" alt="Sugar Rush LTD" height="40" />
      </Box>
      <List>
        {pages.map((page) => (
          <ListItem key={page.title} disablePadding>
            <ListItemButton
              component={Link}
              to={page.path}
              sx={{
                textAlign: "center",
                backgroundColor: isActive(page.path)
                  ? "rgba(255, 0, 0, 0.08)"
                  : "transparent",
                "&:hover": {
                  backgroundColor: "rgba(255, 0, 0, 0.12)",
                },
              }}
            >
              <ListItemText
                primary={page.title}
                primaryTypographyProps={{
                  sx: {
                    color: isActive(page.path)
                      ? "primary.main"
                      : "text.primary",
                    fontWeight: isActive(page.path) ? 600 : 400,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "background.paper",
          boxShadow: 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Mobile menu icon */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, color: "text.primary" }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* The main logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                flexGrow: isMobile ? 1 : 0,
              }}
            >
              <img src="placeholder.png" alt="Sugar Rush LTD" height="100" />
            </Box>

            {/* For desktop navigation */}
            {!isMobile && (
              <Box
                sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.title}
                    component={Link}
                    to={page.path}
                    sx={{
                      my: 2,
                      mx: 1,
                      color: isActive(page.path)
                        ? "primary.main"
                        : "text.primary",
                      display: "block",
                      fontWeight: isActive(page.path) ? 600 : 400,
                      borderBottom: isActive(page.path) ? 2 : 0,
                      borderColor: "primary.main",
                      borderRadius: 0,
                      "&:hover": {
                        backgroundColor: "rgba(255, 0, 0, 0.08)",
                        borderBottom: 2,
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    {page.title}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Solely for better mobile performance
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            backgroundColor: "background.paper",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar />
    </Box>
  );
};

export default ResponsiveNavbar;
