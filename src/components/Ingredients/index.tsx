import React, { useState, ChangeEvent } from "react";
import { TextField, Button, Typography, Box, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { generateContent, parseContent } from "services/api-service";

import { useRecoilState } from "recoil";
import { mealsState } from "state/meal-atoms";
import styled from "styled-components";

function Ingredients() {
  const [ingredientInput, setIngredientInput] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [, setMealsState] = useRecoilState(mealsState);

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

  const handleGenerateIdeas = async () => {
    let prompt = "generate dinner ideas";
    if (ingredients.length > 0) {
      prompt +=
        " including the following ingredients: " + ingredients.join(", ");
    }
    try {
      const response = await generateContent(prompt);
      const parsedMeals = parseContent(response);
      setMealsState(parsedMeals);
    } catch (error) {
      console.error("Error generating ideas:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        padding: 3,
      }}
    >
      <Typography variant="h4">Ingredients</Typography>
      <Typography>
        Input ingredients that you would like to make a meal with. You can also
        generate ideas without adding ingredients!
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          size="small"
          type="text"
          value={ingredientInput}
          onChange={handleInputChange}
          label="Enter an ingredient"
        />
        <Button onClick={handleAddIngredient} variant="outlined">
          Add Ingredient
        </Button>
      </Box>
      <Button onClick={handleGenerateIdeas} variant="contained">
        Generate Ideas
      </Button>
      <IngredientContainer>
        {ingredients.map((ingredient, index) => (
          <Box key={index} display="flex" alignItems="center" gap={1}>
            <Typography>{ingredient}</Typography>
            <IconButton
              size="small"
              onClick={() => handleRemoveIngredient(index)}
            >
              <Delete />
            </IconButton>
          </Box>
        ))}
      </IngredientContainer>
    </Box>
  );
}

export default Ingredients;

const IngredientContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 600px;
  margin: 0 auto;
`;
