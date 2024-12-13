import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import Portfolio from "./pages/Portfolio/Portfolio";
import FunPage from "./pages/FunPage/FunPage";
import WebsiteShowcase from "./pages/WebsiteShowcase/WebsiteShowcase";

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/fun" element={<FunPage />} />
          <Route path="/website-showcase" element={<WebsiteShowcase />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
  