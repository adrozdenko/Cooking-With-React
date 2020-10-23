import React from 'react';
import IngredientList from './ingredientList';
export default function Recipe(props) {
  const { name, cookTime, servings, instructions, ingredients } = props;
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div>
          <span>Cook Time:</span>
          <span>{cookTime}</span>
        </div>
        <div>
          <span>Servings:</span>
          <span>{servings}</span>
        </div>
        <div>
          <span>Instructions:</span>
          <span>{instructions}</span>
        </div>
        <div>
          <span>Ingredients:</span>
          <div>
            <IngredientList ingredients={ingredients}></IngredientList>
          </div>
        </div>
      </div>
    </div>
  );
}
