import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";
import Homepage from "./pages/Homepage";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript";
import Accessibility from "./pages/Accessibility";
import ScorePage from "./pages/ScorePage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="html" element={<Html />} />
          <Route path="css" element={<Css />} />
          <Route path="javascript" element={<Javascript />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="score" element={<ScorePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
