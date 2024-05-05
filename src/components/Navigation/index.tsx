import React from "react";
import linkedin from "../../icons/linkedin.jpg";
import github from "../../icons/github.jpg";
import { Button } from "@mui/material";

export enum PageSection {
  About = "about",
  Skills = "skills",
  Software = "software",
  Built = "built",
}

function Navigation() {
  return (
    <nav>
      <p>
        <strong>Let's connect!</strong>
      </p>
      <Button
        href="https://www.linkedin.com/in/stephanie-borchers-pe-88987869/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textTransform: "none" }}
      >
        <img
          src={linkedin}
          alt="LinkedIn"
          style={{
            height: "20px",
            marginRight: "5px",
          }}
        />
        LinkedIn
      </Button>
      <Button
        href="https://github.com/sborchers"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textTransform: "none" }}
      >
        <img
          src={github}
          alt="GitHub"
          style={{
            height: "20px",
            verticalAlign: "middle",
            marginRight: "5px",
          }}
        />
        GitHub
      </Button>
    </nav>
  );
}

export default Navigation;
