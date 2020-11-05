import React, { useContext } from 'react';
import RecipeIngerdientEdit from './RecipeIngredientEdit';
import { RecipeContext } from './App';
import { v4 as uuidv4 } from 'uuid';

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngrediends = [...recipe.ingredients];
    const index = newIngrediends.findIndex((i) => i.id === id);
    newIngrediends[index] = ingredient;
    handleChange({ ingredients: newIngrediends });
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: '',
      amount: '',
    };
    handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
  }

  function handleIngredientDelete(id) {
    handleChange({
      ingredients: recipe.ingredients.filter((i) => i.id !== id),
    });
  }

  return (
    <div className='recipe-edit'>
      <div className='recipe-edit__remove-button-container'>
        <button
          className='btn recipe-edit__remove-button'
          onClick={() => handleRecipeSelect(undefined)}>
          &times;
        </button>
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
          onChange={(e) => handleChange({ name: e.target.value })}
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
          onChange={(e) => handleChange({ cookTime: e.target.value })}
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
          onChange={(e) =>
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
          onChange={(e) => handleChange({ instructions: e.target.value })}
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
            handleIngredientDelete={handleIngredientDelete}
          />
        ))}
      </div>
      <div className='recipe-edit__add-ingredient-button-container'>
        <button
          className='btn btn--primary'
          onClick={() => handleIngredientAdd()}>
          Add Ingerdient
        </button>
      </div>
    </div>
  );
}
