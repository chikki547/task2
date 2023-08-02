import "./App.css";
import AppLayout from "./components/AppLayout";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
const theme = createTheme({});

function App() {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <AppLayout />
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;
