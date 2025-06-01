import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { theme } from "./theme/theme";
import ResponsiveNavbar from "./components/layout/ResponsiveNavbar";
import { Box, CssBaseline, CircularProgress, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Home = React.lazy(() => import("./components/Home"));
const Menu = React.lazy(() => import("./components/Menu"));
const About = React.lazy(() => import("./components/About"));
const Booking = React.lazy(() => import("./components/Booking"));
const Contact = React.lazy(() => import("./components/Contact"));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <BrowserRouter>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <ResponsiveNavbar />
              <Box 
                component="main" 
                id="main-content"
                sx={{ 
                  flexGrow: 1, 
                  pt: 4,
                  // Ensure proper focus management for accessibility
                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                <React.Suspense
                  fallback={
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50vh",
                        gap: 2,
                      }}
                    >
                      <CircularProgress 
                        size={40} 
                        thickness={4}
                        sx={{ color: "primary.main" }}
                      />
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{ fontSize: "1.1rem" }}
                      >
                        Loading delicious content...
                      </Typography>
                    </Box>
                  }
                >
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </React.Suspense>
              </Box>
            </Box>
          </BrowserRouter>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
