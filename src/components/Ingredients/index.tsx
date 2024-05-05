import React from "react";

function Ingredients() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 10,
      }}
    >
      <h2>Ingredients</h2>
      <p style={{ marginTop: 0, maxWidth: 600 }}>
        Input ingredients that you would like to make a meal with. You can also
        generate ideas without adding ingredients!
      </p>
    </main>
  );
}

export default Ingredients;
