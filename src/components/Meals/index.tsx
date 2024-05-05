import React from "react";
import styled from "styled-components";
import react from "../../icons/skills/react.jpg";
import angular from "../../icons/skills/angular.jpg";
import ts from "../../icons/skills/ts.jpg";

function Meals() {
  return (
    <div style={{ marginTop: 30, paddingTop: 10 }}>
      <h2>Meals</h2>
      <p>
        Here are some ideas for what you can make for dinner. Select one of the
        meals to generate recipes to use!
      </p>
      <IconContainer>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={react} alt="React" style={{ height: 60 }} />
        </a>
        <a href="https://angular.io" target="_blank" rel="noopener noreferrer">
          <img src={angular} alt="Angular" style={{ height: 60 }} />
        </a>
        <a
          href="https://www.typescriptlang.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ts} alt="Typescript" style={{ height: 60 }} />
        </a>
      </IconContainer>
    </div>
  );
}

export default Meals;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 46px;
  max-width: 600px;
  margin: 0 auto;
`;
