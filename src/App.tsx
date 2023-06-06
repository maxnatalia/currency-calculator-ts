import { HashRouter, Routes, Route } from "react-router-dom";
import { toAbout, toError, toHome } from "./routes";
import Navigation from "./common/Navigation";
import Footer from "./common/Footer";
import MainContainer from "./common/MainContainer";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <MainContainer>
        <Routes>
          <Route path={toAbout()} element={<AboutPage />} />
          <Route path={toHome()} element={<HomePage />} />
          <Route path={toError()} element={<ErrorPage />} />
        </Routes>
      </MainContainer>
      <Footer />
    </HashRouter>
  );
};

export default App;
