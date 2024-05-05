import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useState } from "react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`App ${darkMode ? "darkMode" : ""}`}>
      <div className="App-header">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="App-content">
        <AboutMe />
        <Skills />
        <Projects />
      </div>
      <div className="App-nav">
        <Navigation></Navigation>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
