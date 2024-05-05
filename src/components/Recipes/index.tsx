import React from "react";
import Recipes from "../RecipeCard";

function Projects() {
  return (
    <nav style={{ marginTop: 70 }}>
      <h2>Recipes</h2>
      <p>Here are some recipes for the meal you've selected!</p>
      <Recipes></Recipes>
    </nav>
  );
}

export default Projects;
