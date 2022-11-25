import "./App.css";
import { Header } from "./components/Header/Header.js";
import styled from "styled-components";
import { ThemeContext } from "./components/ThemeContext/themeContext";
import { MainContent } from "./components/MainContent/index.js";
import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetail from "./components/MainContent/CountryDetail/index";
import { Footer } from "./components/Footer/index";

function App() {
  const themeContext = useContext(ThemeContext);
  return (
    <AppContainer className={themeContext.theme}>
      <Router>
        <Header />
        <ContentContainer>
          <Routes>
            <Route exact path="/" element={<MainContent />}></Route>
            {/* useParams lấy giá trị regionName từ app.js */}
            <Route path="/region/:regionName" element={<MainContent />}></Route>
            <Route
              path="/country/:countryName"
              element={<CountryDetail />}
            ></Route>
            <Route path="/search/:name" element={<MainContent />}></Route>
          </Routes>
        </ContentContainer>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff00000;
  }

  &::-webkit-scrollbar-track {
    background: #ff00000;
  }
`;

const ContentContainer = styled.div`
  max-width: 1280px;
  display: block;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  padding: 12px;
`;
