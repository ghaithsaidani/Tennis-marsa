import {ThemeProvider} from "@mui/material";
import Theme from "./theme/Theme";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Home from "./pages/Home/Home";
import Auth from "./pages/authentification/Auth";


function App() {
  return (
    <ThemeProvider theme={Theme}>
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route index path="/login" element={<Auth />} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
