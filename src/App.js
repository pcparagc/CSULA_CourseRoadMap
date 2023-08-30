import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./foundation/theme";
import Layout from "./layouts/Layout";
import CourseBlock from "./components/CourseBlock";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Layout>
        <CourseBlock />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
