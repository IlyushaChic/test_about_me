import { Navigate, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import Blog from "./pages/Blog/Blog";
import Portfolio from "./pages/Portfolio/Portfolio";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header/> 
      <div className="App">
        <Routes>
          <Route path="about-me" element={<AboutMe />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={ <Navigate to="about-me"/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
