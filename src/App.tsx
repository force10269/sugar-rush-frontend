import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { theme } from "./theme/theme";
import ResponsiveNavbar from "./components/layout/ResponsiveNavbar";
import { Box, CssBaseline } from "@mui/material";
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
              <Box component="main" sx={{ flexGrow: 1 }}>
                <React.Suspense
                  fallback={
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50vh",
                      }}
                    >
                      Loading...
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
