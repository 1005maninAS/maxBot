import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7C4DFF",
    },
    secondary: {
      main: "#FFC107",
    },
    background: {
      default: "#12121c",
      paper: "#1c1c2b",
    },
    text: {
      primary: "#e8e8f0",
      secondary: "#9a9aad",
    },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
});
