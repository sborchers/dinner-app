import { PageSection } from "../Navigation";
import React from "react";

function AboutMe() {
  return (
    <main
      id={PageSection.About}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 10,
      }}
    >
      <h2>About</h2>
      <p style={{ marginTop: 0, maxWidth: 600 }}>
        I'm Stephanie Borchers, a software engineer with experience in
        web-application development. Before software, I practiced structural
        engineering, and have worked on the structural design of over 15
        buildings across the US. My passion for software and technology
        developed from the desire to automate processes and improve efficiency.
      </p>
    </main>
  );
}

export default AboutMe;
