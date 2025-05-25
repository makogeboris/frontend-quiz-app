import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";
import Homepage from "./pages/Homepage";
import HtmlPage from "./pages/HtmlPage";
import CssPage from "./pages/CssPage";
import JavascriptPage from "./pages/JavascriptPage";
import AccessibilityPage from "./pages/AccessibilityPage";
import ScorePage from "./pages/ScorePage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="html" element={<HtmlPage />} />
          <Route path="css" element={<CssPage />} />
          <Route path="javascript" element={<JavascriptPage />} />
          <Route path="accessibility" element={<AccessibilityPage />} />
          <Route path="score" element={<ScorePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
