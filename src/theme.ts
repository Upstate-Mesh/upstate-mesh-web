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
  },
  typography: {
    allVariants: {
      lineHeight: 1.5,
    },
    fontFamily: '"Mozilla Text", sans-serif',
    fontSize: 17,
    fontWeightRegular: 400,
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 800 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 800 },
    h6: { fontWeight: 800 },
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
          textTransform: "none",
        },
      },
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

export default Theme;
