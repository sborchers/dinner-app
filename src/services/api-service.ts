import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.REACT_APP_GEMINI_AI_API_KEY as string
);

const generateContent = async (prompt: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    // const text = `response ## Dinner Ideas with Cheese & Tuna:

    // **Quick & Easy:**

    // * **Tuna Melt:** Classic comfort food. Use sourdough bread, lots of melted cheese, and a creamy tuna salad. Add sliced tomato or avocado for extra flavor.
    // * **Tuna & Cheese Pasta Salad:** Combine cooked pasta, canned tuna, your favorite cheese (feta, cheddar, mozzarella), chopped veggies like cucumber, bell pepper, and olives. Toss with a lemon vinaigrette.
    // * **Tuna & Cheese Quesadillas:** Fill tortillas with canned tuna, cheese, and optional veggies like onions and peppers. Cook on a griddle or in a pan until golden brown.
    // * **Tuna & Cheese Omelette:** A quick and satisfying dinner. Beat eggs with milk and cheese, cook in a pan, and add canned tuna for protein.

    // **More Elaborate:**

    // * **Tuna & Cheese Stuffed Shells:** Use jumbo pasta shells, filling them with a mixture of ricotta cheese, shredded mozzarella, canned tuna, and spinach. Top with marinara sauce and more cheese, and bake until bubbly.
    // * **Tuna & Cheese Pizza:** Use a pre-made pizza crust or make your own. Top with tomato sauce, canned tuna, cheese, and your favorite toppings like onions, peppers, and olives.
    // * **Tuna & Cheese Croquettes:** Combine canned tuna, cheese, breadcrumbs, and spices. Form into small balls, bread, and deep-fry or bake until golden brown. Serve with a dipping sauce.
    // * **Tuna & Cheese Salad Wraps:** Mix canned tuna, cheese, chopped celery, onion, and your favorite dressing. Fill tortillas or lettuce wraps with the mixture.

    // **Bonus:**

    // * **Tuna & Cheese Macaroni and Cheese:** Add canned tuna to your favorite macaroni and cheese recipe for extra protein and flavor.

    // **Tips:**

    // * Use canned tuna in oil for richer flavor.
    // * Experiment with different cheese varieties – cheddar, mozzarella, feta, ricotta, etc.
    // * Add extra flavor with spices, herbs, and vegetables.
    // * Serve with a side salad or steamed vegetables.

    // Enjoy your delicious and cheesy tuna dinners!`;
    return text;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error generating content:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error("Failed to generate content");
  }
};

interface Meal {
  title: string;
  description: string;
}

function parseContent(input: string): Meal[] {
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

export { generateContent, parseContent };
