import React from "react";
import mfah from "../../images/mfah.jpg";
import RecipeCard from "./recipe-card";
import styled from "styled-components";

function Recipes() {
  return (
    <ProjectsContainer>
      <RecipeCard title="MFAH" copy="Museum" source={mfah}></RecipeCard>
    </ProjectsContainer>
  );
}

export default Recipes;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 20px;
`;
