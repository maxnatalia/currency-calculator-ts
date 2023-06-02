import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./common/Navigation";
import Footer from "./common/Footer";
import MainContainer from "./common/MainContainer";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <MainContainer>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MainContainer>
      <Footer />
    </HashRouter>
  );
}

export default App;
