import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material/styles";
//import { theme } from "./Foundation/theme";

function App() {
  return (
    //<ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
   // </ThemeProvider>
  );
}

export default App;
