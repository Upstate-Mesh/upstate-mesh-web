import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#75EBA5",
    },
    background: {
      default: "#3a3c4d",
      paper: "#3a3c4d",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.7)",
    },
    darkButton: {
      main: "#3a3c4d",
      contrastText: "#ffffff",
    },
  },
  typography: {
    allVariants: {
      lineHeight: 1.3,
    },
    fontFamily: '"Mozilla Text", sans-serif',
    fontSize: 15,
    fontWeightRegular: 400,
    h1: { color: "#75eba5", fontWeight: 800 },
    h2: { color: "#75eba5", fontWeight: 800 },
    h3: { color: "#75eba5", fontWeight: 800 },
    h4: { color: "#75eba5", fontWeight: 800 },
    h5: { color: "#75eba5", fontWeight: 800 },
    h6: { color: "#75eba5", fontWeight: 800 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#3a3c4d",
          color: "#ffffff",
        },
        a: {
          color: "#ffffff",
          textDecoration: "underline",
          "&:hover": {
            color: "#75EBA5",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1.1rem",
          fontWeight: 800,
          textTransform: "none",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
      variants: [
        {
          props: { color: "darkButton" },
          style: {
            backgroundColor: "#3a3c4d",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#2e2f3e",
            },
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          textDecoration: "underline",
          "&:hover": {
            color: "#75EBA5",
          },
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    darkButton: Palette["primary"];
  }
  interface PaletteOptions {
    darkButton?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    darkButton: true;
  }
}

export default Theme;
