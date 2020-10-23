import React, { useState } from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = React.createContext();

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [{ id: uuidv4(), name: 'Name', amount: '1 Tbs' }],
    };

    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes}></RecipeList>
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken',
    ingredients: [
      {
        id: 1,
        name: 'chicken',
        amount: '2 kg',
      },
      {
        id: 2,
        name: 'salt',
        amount: '1 Tbs',
      },
    ],
  },
  {
    id: 2,
    name: 'Plain pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork',
    ingredients: [
      {
        id: 1,
        name: 'pork',
        amount: '3 kg',
      },
      {
        id: 2,
        name: 'paprika',
        amount: '2 Tbs',
      },
    ],
  },
];

export default App;
