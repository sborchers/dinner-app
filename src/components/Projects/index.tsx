import React from "react";
import BuiltProjects from "../ProjectCard";
import { Button } from "@mui/material";
import styled from "styled-components";
import { PageSection } from "../Navigation";

function Projects() {
  return (
    <nav style={{ marginTop: 70 }}>
      <h2>Projects</h2>
      <p id={PageSection.Software} style={{ paddingTop: 30 }}>
        <strong>Software</strong>
      </p>
      <p>In progress :) Watch this space!</p>
      <ProjectsContainer>
        <Button
          href="https://github.com/sborchers/my-website"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          style={{
            textTransform: "none",
            width: "fit-content",
          }}
        >
          This Site!
        </Button>
        <Button
          href="https://github.com/sborchers/TDI-Capstone"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          style={{ textTransform: "none", width: "fit-content" }}
        >
          Success Prediction for Airbnb Listings
        </Button>
      </ProjectsContainer>
      <p id={PageSection.Built} style={{ marginTop: 20, paddingTop: 30 }}>
        <strong>Built Environment</strong>
      </p>
      <p>
        Here's a sample of projects that I've contributed to as a structural
        engineer over the years!
      </p>
      <BuiltProjects></BuiltProjects>
    </nav>
  );
}

export default Projects;

const ProjectsContainer = styled.div`
  display: grid;
  gap: 20px;
  place-items: center;
`;
