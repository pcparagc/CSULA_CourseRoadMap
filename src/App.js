import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./foundation/theme";
import Layout from "./layouts/Layout";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
