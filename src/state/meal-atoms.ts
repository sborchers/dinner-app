import { atom } from "recoil";

export const mealsState = atom<{ title: string; description: string }[]>({
  key: "mealsState",
  default: [],
});
