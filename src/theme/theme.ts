import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#C54933",
      light: "#A62E1D",
      dark: "#FFE6D9",
      contrastText: "#ffb696",
    },
    secondary: {
      main: "#424242", // Dark gray as secondary color
      light: "#757575",
      dark: "#212121",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F5F5", // Light gray background
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2C2C2C", // Softer black for text
      secondary: "#666666", // Medium gray for secondary text
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#2C2C2C",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      color: "#2C2C2C",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
      color: "#2C2C2C",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.5rem",
      color: "#2C2C2C",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#2C2C2C",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#2C2C2C",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 24px",
          boxShadow: "none",
        },
        contained: {
          "&:hover": {
            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
          "&:hover": {
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            backgroundColor: "#FFFFFF",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Make typography responsive
theme = responsiveFontSizes(theme);

export { theme };
