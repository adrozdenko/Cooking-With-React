import React from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';

export const ThemeContext = React.createContext();

function App() {
  return <RecipeList recipes={sampleRecipes}></RecipeList>;
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
