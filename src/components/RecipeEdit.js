import React, { useContext } from 'react';
import RecipeIngerdientEdit from './RecipeIngredientEdit';
import { RecipeContext } from './App';

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngrediends = [...recipe.ingredients];
    const index = newIngrediends.findIndex((i) => i.id === id);
    newIngrediends[index] = ingredient;
    handleChange({ ingredients: newIngrediends });
  }

  return (
    <div className='recipe-edit'>
      <div className='recipe-edit__remove-button-container'>
        <button className='btn recipe-edit__remove-button'>&times;</button>
      </div>
      <div className='recipe-edit__details-grid'>
        <label htmlFor='name' className='recipe-edit__label'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          defaultValue={recipe.name}
          onInput={(e) => handleChange({ name: e.target.value })}
          className='recipe-edit__input'
        />
        <label htmlFor='cookTime' className='recipe-edit__label'>
          Cook Time
        </label>
        <input
          type='text'
          name='cookTime'
          id='cookTime'
          defaultValue={recipe.cookTime}
          onInput={(e) => handleChange({ cookTime: e.target.value })}
          className='recipe-edit__input'
        />
        <label htmlFor='servings' className='recipe-edit__label'>
          Servings
        </label>
        <input
          type='number'
          min='1'
          name='servings'
          id='servings'
          defaultValue={recipe.servings}
          onInput={(e) =>
            handleChange({ servings: parseInt(e.target.value) || 0 })
          }
          className='recipe-edit__input'
        />
        <label htmlFor='instructions' className='recipe-edit__label'>
          instructions
        </label>
        <textarea
          type='textArea'
          name='instructions'
          id='instructions'
          defaultValue={recipe.instructions}
          onInput={(e) => handleChange({ instructions: e.target.value })}
          className='recipe-edit__input'
        />
      </div>
      <br />
      <label className='recipe-edit__label'>Ingerdients</label>
      <div className='recipe-edit__ingredient-grid'>
        <div>Name</div>
        <div>Ammount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngerdientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
          />
        ))}
      </div>
      <div className='recipe-edit__add-ingredient-button-container'>
        <button className='btn btn--primary'>Add Ingerdient</button>
      </div>
    </div>
  );
}
