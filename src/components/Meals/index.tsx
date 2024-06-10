import React from "react";
import styled from "styled-components";
import { mealsState } from "state/meal-atoms";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { useRecoilValue } from "recoil";
function Meals() {
  const meals = useRecoilValue(mealsState);
  return (
    meals.length && (
      <div style={{ marginTop: 30, paddingTop: 10 }}>
        <h2>Meals</h2>
        <p>
          Here are some ideas for what you can make for dinner. Select one of
          the meals to generate recipes to use!
        </p>
        <MealContainer>
          {meals.map((meal, index) => (
            <CardContainer variant="outlined" key={index}>
              <CardActionArea
                component="a"
                target="_blank"
                sx={{ height: "100%" }}
              >
                <CardContent>
                  <Typography sx={{ textAlign: "left" }} variant="h6">
                    {meal.title}
                  </Typography>
                  <Typography
                    sx={{ mt: 1.5, textAlign: "left" }}
                    variant="body2"
                  >
                    {meal.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </CardContainer>
          ))}
        </MealContainer>
      </div>
    )
  );
}

export default Meals;

const MealContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin: 0 auto;
  max-width: calc(100vw - 48px);
`;

const CardContainer = styled(Card)`
  max-width: 200px;
`;
