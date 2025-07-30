import { v4 as uuidv4 } from "uuid";

// Placeholder recipe data
export const recipes = [
  {
    id: uuidv4(),
    title: "Avocado Toast",
    image: "https://images.unsplash.com/photo-1514512364185-4cfd4a4f0d35?auto=format&fit=crop&w=800&q=80",
    description:
      "A delicious, healthy breakfast recipe of smashed avocado on crusty bread, garnished with chili flakes.",
    category: "Breakfast",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "Salt",
      "Pepper",
      "Chili flakes",
      "Lemon wedge"
    ],
    steps: [
      "Toast the bread.",
      "Scoop and smash the avocado onto the bread.",
      "Sprinkle with salt, pepper, and chili flakes.",
      "Serve with a lemon wedge."
    ]
  },
  {
    id: uuidv4(),
    title: "Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    description:
      "Classic Italian pasta dish with a rich creamy sauce using eggs, cheese, pancetta, and pepper.",
    category: "Dinner",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 eggs",
      "50g parmesan cheese",
      "Black pepper"
    ],
    steps: [
      "Cook the spaghetti.",
      "Fry pancetta until crisp.",
      "Whisk eggs and cheese together.",
      "Combine pasta, pancetta, and egg mixture. Season with pepper."
    ]
  },
  {
    id: uuidv4(),
    title: "Greek Salad",
    image: "https://images.unsplash.com/photo-1519864604422-cd1e69da1474?auto=format&fit=crop&w=800&q=80",
    description:
      "A fresh, summery salad with feta cheese, olives, tomatoes, cucumber, and a lemon-oregano dressing.",
    category: "Lunch",
    ingredients: [
      "4 tomatoes",
      "1 cucumber",
      "100g feta cheese",
      "Handful of olives",
      "Red onion",
      "Oregano",
      "Olive oil",
      "Lemon juice"
    ],
    steps: [
      "Chop tomatoes, cucumber, and onion.",
      "Mix in a bowl with olives.",
      "Top with feta and oregano.",
      "Drizzle with olive oil and lemon juice."
    ]
  },
  {
    id: uuidv4(),
    title: "Chocolate Mug Cake",
    image: "https://images.unsplash.com/photo-1551022379-74d640642117?auto=format&fit=crop&w=800&q=80",
    description:
      "A quick-fix chocolate cake made in a mug in under 5 minutes. Perfect for dessert cravings.",
    category: "Dessert",
    ingredients: [
      "4 tbsp flour",
      "4 tbsp sugar",
      "2 tbsp cocoa powder",
      "3 tbsp milk",
      "2 tbsp oil",
      "1 egg",
      "1/2 tsp vanilla extract"
    ],
    steps: [
      "Mix dry ingredients in a mug.",
      "Add wet ingredients and mix well.",
      "Microwave for 1.5 minutes.",
      "Let cool slightly and enjoy."
    ]
  }
];
