import { atom } from "recoil";
import { Meal, Recipe } from "utils/apiHelpers";

export const mealsState = atom<Meal[]>({
  key: "mealsState",
  default: [],
});

export const recipesState = atom<Recipe[]>({
  key: "recipesState",
  default: [],
});
