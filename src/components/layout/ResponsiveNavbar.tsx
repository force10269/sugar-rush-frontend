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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";

const pages = [
  { title: "Home", path: "/", ariaLabel: "Go to home page" },
  { title: "Menu", path: "/menu", ariaLabel: "View our menu and treats" },
  { title: "About", path: "/about", ariaLabel: "Learn about Sugar Rush" },
  { title: "Booking", path: "/booking", ariaLabel: "Book us for your event" },
  { title: "Contact", path: "/contact", ariaLabel: "Contact Sugar Rush" },
];

const ResponsiveNavbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box sx={{ textAlign: "center", height: "100%" }}>
      <Box 
        sx={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between",
          p: 2,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img 
            src="/placeholder.png" 
            alt="Sugar Rush Ltd logo" 
            height="40" 
            style={{ marginRight: "8px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600, color: "primary.main" }}>
            Sugar Rush
          </Typography>
        </Box>
        <IconButton
          onClick={handleDrawerClose}
          aria-label="Close navigation menu"
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ pt: 2 }}>
        {pages.map((page) => (
          <ListItem key={page.title} disablePadding>
            <ListItemButton
              component={Link}
              to={page.path}
              onClick={handleDrawerClose}
              aria-label={page.ariaLabel}
              aria-current={isActive(page.path) ? "page" : undefined}
              sx={{
                textAlign: "center",
                py: 2,
                mx: 1,
                borderRadius: 2,
                backgroundColor: isActive(page.path)
                  ? "primary.light"
                  : "transparent",
                "&:hover": {
                  backgroundColor: isActive(page.path) 
                    ? "primary.light" 
                    : "primary.main",
                  "& .MuiListItemText-primary": {
                    color: "white",
                  },
                },
                "&:focus-visible": {
                  outline: `2px solid ${theme.palette.primary.main}`,
                  outlineOffset: "2px",
                },
              }}
            >
              <ListItemText
                primary={page.title}
                primaryTypographyProps={{
                  sx: {
                    color: isActive(page.path)
                      ? "white"
                      : "text.primary",
                    fontWeight: isActive(page.path) ? 700 : 500,
                    fontSize: "1.1rem",
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
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
        role="banner"
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  mr: 2, 
                  color: "text.primary",
                  "&:focus-visible": {
                    outline: `2px solid ${theme.palette.primary.main}`,
                    outlineOffset: "2px",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Box
              component={Link}
              to="/"
              aria-label="Sugar Rush homepage"
              sx={{
                mr: 2,
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                flexGrow: isMobile ? 1 : 0,
                "&:focus-visible": {
                  outline: `2px solid ${theme.palette.primary.main}`,
                  outlineOffset: "2px",
                  borderRadius: 1,
                },
              }}
            >
              <img 
                src="/placeholder.png" 
                alt="Sugar Rush Ltd - Colorado Food Truck logo" 
                height="80"
                style={{ maxHeight: "80px", objectFit: "contain" }}
              />
              {!isMobile && (
                <Typography
                  variant="h6"
                  sx={{
                    ml: 1,
                    fontWeight: 700,
                    color: "primary.main",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Sugar Rush
                </Typography>
              )}
            </Box>

            {!isMobile && (
              <Box
                component="nav"
                role="navigation"
                aria-label="Main navigation"
                sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.title}
                    component={Link}
                    to={page.path}
                    aria-label={page.ariaLabel}
                    aria-current={isActive(page.path) ? "page" : undefined}
                    sx={{
                      my: 2,
                      mx: 1,
                      px: 3,
                      py: 1,
                      color: isActive(page.path)
                        ? "primary.main"
                        : "text.primary",
                      display: "block",
                      fontWeight: isActive(page.path) ? 700 : 500,
                      fontSize: "1rem",
                      borderBottom: isActive(page.path) ? 3 : 0,
                      borderColor: "primary.main",
                      borderRadius: "8px 8px 0 0",
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                        borderBottom: 3,
                        borderColor: "primary.main",
                        transform: "translateY(-1px)",
                      },
                      "&:focus-visible": {
                        outline: `2px solid ${theme.palette.primary.main}`,
                        outlineOffset: "2px",
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

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerClose}
        id="mobile-navigation"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: "background.paper",
          },
        }}
      >
        {drawer}
      </Drawer>

      <Toolbar />
    </Box>
  );
};

export default ResponsiveNavbar;
