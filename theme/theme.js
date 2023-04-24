import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: ["Helvetica", "Arial", "sans-serif"].join(","),
  },
  primary : {
    main: "#fffff"
  }
});

export default theme;
