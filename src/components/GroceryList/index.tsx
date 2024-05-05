import React from "react";

function GroceryList() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 10,
      }}
    >
      <h2>Grocery List</h2>
      <p style={{ marginTop: 0, maxWidth: 600 }}>
        You're one step closer to making a meal! Here are the ingredients you'll
        need:
      </p>
    </main>
  );
}

export default GroceryList;
