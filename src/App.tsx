import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useState } from "react";
import Ingredients from "./components/Ingredients";
import Meals from "./components/Meals";
import Recipes from "./components/Recipes";
import GroceryList from "./components/GroceryList";
import OtherIdeas from "./components/OtherIdeas";

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
        <Ingredients />
        <Meals />
        <Recipes />
        <GroceryList />
        <OtherIdeas />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
