import React from 'react';
import RecipeIngerdientEdit from './RecipeIngredientEdit';

export default function RecipeEdit() {
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
          className='recipe-edit__input'
        />
        <label htmlFor='cookTime' className='recipe-edit__label'>
          Cook Time
        </label>
        <input
          type='text'
          name='cookTime'
          id='cookTime'
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
          className='recipe-edit__input'
        />
        <label htmlFor='instructions' className='recipe-edit__label'>
          instructions
        </label>
        <textarea
          type='textArea'
          name='instructions'
          id='instructions'
          className='recipe-edit__input'
        />
      </div>
      <br />
      <label className='recipe-edit__label'>Ingerdients</label>
      <div className='recipe-edit__ingredient-grid'>
        <div>Name</div>
        <div>Ammount</div>
        <div></div>
        <RecipeIngerdientEdit />
        <RecipeIngerdientEdit />
      </div>
      <div className='recipe-edit__add-ingredient-button-container'>
        <button className='btn btn--primary'>Add Ingerdient</button>
      </div>
    </div>
  );
}
