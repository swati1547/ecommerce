import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff3f6c", // Myntra pink
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: `"Inter", "Roboto", sans-serif`,
  },
});

export default theme;
