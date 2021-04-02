import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  transitions: {
    create: () => "none",
  },
  palette: {
    primary: {
      main: "#db7093",
    },
    secondary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"],
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "0px",
      },
    },
    MuiTextField: {
      root: {
        color: "palevioletred",
      },
    },
  },
});

export default theme;
