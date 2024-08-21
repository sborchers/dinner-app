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
    // * **Tuna & Cheese Salad Wraps:** Mix canned tuna, cheese, chopped celery, onion, and your favorite dressing. Fill tortillas or lettuce wraps with the mixture.`;
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

export { generateContent };
