import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  typography: {
    fontFamily: ["rubik", "sans-serif"],
  },
  palette: {
    primary: {
      main: '#fff'
    },
    text: {
      primary: "#fff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "::-webkit-scrollbar": {
            display: "none",
          },
        },
      },
    },
  },
});

export default Theme;
