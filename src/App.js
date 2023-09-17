import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./foundation/theme";
import Layout from "./layouts/Layout";
import CourseBlock from "./components/CourseBlock";
import Home from "./pages/Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      {/* <Layout> */}
      {/* <CourseBlock /> */}
      <Home />
      {/* </Layout> */}
    </ThemeProvider>
  );
}

export default App;
