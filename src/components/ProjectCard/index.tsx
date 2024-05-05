import React from "react";
import daysEnd from "../../images/days-end.jpg";
import mfah from "../../images/mfah.jpg";
import ias from "../../images/ias.jpg";
import slt from "../../images/slt.jpg";
import mpk22 from "../../images/mpk22.jpg";
import motherSon from "../../images/mother-son.jpg";
import ProjectCard from "./project-card";
import styled from "styled-components";
import garage from "../../images/g5Garage.jpg";
import lmc from "../../images/lmc.jpg";

function BuiltProjects() {
  return (
    <ProjectsContainer>
      <ProjectCard
        title="MFAH"
        copy="Museum"
        source={mfah}
        href="https://www.nordenson.com/projects/museum-of-fine-arts-houston-and-glassell-school-of-art"
      ></ProjectCard>
      <ProjectCard
        title="IAS"
        copy="Academic Building"
        source={ias}
        href="https://www.ias.edu/default/tags/rubenstein-commons"
      ></ProjectCard>
      <ProjectCard
        title="Day's End"
        copy="Sculpture"
        source={daysEnd}
        href="https://www.nordenson.com/projects/days-end"
      ></ProjectCard>
      <ProjectCard
        title="John Palach Memorial"
        copy="Sculpture"
        source={motherSon}
        href="https://cooper.edu/architecture/news/memorial-jan-palach-designed-john-hejduk-unveiled-prague"
      ></ProjectCard>
      <ProjectCard
        title="LinkedIn Campus"
        copy="Office"
        source={lmc}
        href="https://forell.com/projects/developer-commercial-corp/linkedin-middlefield-campus/"
      ></ProjectCard>
      <ProjectCard
        title="Meta MPK22 Campus"
        copy="Office"
        source={mpk22}
        href="https://forell.com/projects/developer-commercial-corp/facebook-mpk-22/"
      ></ProjectCard>
      <ProjectCard
        title="Bay View Garage"
        copy="Parking Garage"
        source={garage}
        href="https://www.clarkpacific.com/project/bay-view-parking-structure/"
      ></ProjectCard>
      <ProjectCard
        title="SLT"
        copy="Historic Renovation"
        source={slt}
        href="https://www.deseret.com/2019/4/19/20671272/here-s-how-the-salt-lake-temple-s-base-isolation-system-will-protect-it-from-earthquakes/"
      ></ProjectCard>
    </ProjectsContainer>
  );
}

export default BuiltProjects;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 20px;
`;
