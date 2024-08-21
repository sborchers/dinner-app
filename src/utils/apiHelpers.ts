export interface Meal {
  title: string;
  description: string;
}

function parseMeals(input: string): Meal[] {
  // Split the input text into lines
  const lines = input.split("\n");
  // Extract the titles and descriptions from the lines
  const meals: Meal[] = [];
  for (const line of lines) {
    // Check if the line starts with '* **'
    if (line.trim().startsWith("* **")) {
      // Extract the title and description from the line
      const [title, description] = line.trim().substring(4).split(":**");
      const trimmedTitle = title.trim();
      const trimmedDescription = description.trim();
      meals.push({ title: trimmedTitle, description: trimmedDescription });
    }
  }
  return meals;
}

export interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string[];
}

function parseRecipes(input: string): Recipe[] {
  // Split the text into sections based on recipe types
  const sections = input
    .split("\n\n")
    .filter((section) => section.trim() !== "");

  // Helper function to extract recipes from a section
  const extractRecipes = (section: string): Recipe[] => {
    const lines = section.split("\n");
    const recipes: Recipe[] = [];
    let currentRecipe: Recipe | null = null;

    lines.forEach((line) => {
      if (line.startsWith("**")) {
        if (currentRecipe) {
          recipes.push(currentRecipe);
        }
        currentRecipe = {
          title: line.replace(/[\*\*\:]/g, "").trim(),
          ingredients: [],
          instructions: [],
        };
      } else if (line.startsWith("* **Ingredients:**")) {
        // Skip header line
      } else if (line.startsWith("* **Instructions:**")) {
        // Stop collecting ingredients
        if (currentRecipe)
          currentRecipe.instructions.push(line.replace(/[\*\*]/g, "").trim());
      } else if (currentRecipe) {
        if (line.includes("*")) {
          currentRecipe.ingredients.push(line.replace(/\*/g, "").trim());
        } else {
          currentRecipe.instructions.push(line.trim());
        }
      }
    });

    // Push the last recipe if it exists
    if (currentRecipe) {
      recipes.push(currentRecipe);
    }

    return recipes;
  };

  const recipes: Recipe[] = [];

  sections.forEach((section) => {
    recipes.push(...extractRecipes(section));
  });

  return recipes;
}

export { parseMeals, parseRecipes };
