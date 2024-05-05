import React, { useState, ChangeEvent } from "react";
import { TextField, Button, Typography, Box, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

function Ingredients() {
  const [ingredientInput, setIngredientInput] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIngredientInput(event.target.value);
  };

  const handleAddIngredient = () => {
    if (ingredientInput.trim() !== "") {
      setIngredients([...ingredients, ingredientInput.trim()]);
      setIngredientInput("");
    }
  };

  const handleRemoveIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleGenerateIdeas = () => {
    console.log("Generating ideas with ingredients:", ingredients);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 2,
      }}
    >
      <Typography variant="h4">Ingredients</Typography>
      <Typography>
        Input ingredients that you would like to make a meal with. You can also
        generate ideas without adding ingredients!
      </Typography>
      <TextField
        type="text"
        value={ingredientInput}
        onChange={handleInputChange}
        label="Enter an ingredient"
      />
      <Button onClick={handleAddIngredient} variant="contained">
        Add Ingredient
      </Button>
      {ingredients.map((ingredient, index) => (
        <Box key={index} display="flex" alignItems="center">
          <Typography>{ingredient}</Typography>
          <IconButton onClick={() => handleRemoveIngredient(index)}>
            <Delete />
          </IconButton>
        </Box>
      ))}
      <Button onClick={handleGenerateIdeas} variant="contained" color="primary">
        Generate Ideas
      </Button>
    </Box>
  );
}

export default Ingredients;
