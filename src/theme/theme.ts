import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#C54933", // Main red
      light: "#E8744A", // Lighter, more appealing red
      dark: "#A62E1D", // Darker red for accents
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#424242", // Dark gray as secondary color
      light: "#757575",
      dark: "#212121",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FAFAFA", // Slightly warmer background
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2C2C2C", // Softer black for text
      secondary: "#666666", // Medium gray for secondary text
    },
    info: {
      main: "#FFF8E7", // Warm cream for banner background
      light: "#FFFCF0", // Even lighter cream
      dark: "#F5E6B8", // Golden cream
      contrastText: "#2C2C2C",
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
          borderRadius: 12,
          padding: "10px 28px",
          boxShadow: "none",
          fontWeight: 600,
        },
        contained: {
          "&:hover": {
            boxShadow: "0px 4px 12px rgba(197, 73, 51, 0.3)",
            transform: "translateY(-1px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
          "&:hover": {
            boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
            transform: "translateY(-2px)",
          },
          transition: "all 0.3s ease-in-out",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderRadius: 16,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
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

theme = responsiveFontSizes(theme);

export { theme };
