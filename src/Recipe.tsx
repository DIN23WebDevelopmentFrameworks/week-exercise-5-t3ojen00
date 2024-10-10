import React from 'react';

export interface IRecipe {
    id: string;
    name: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const Recipe: React.FC<{ recipeData: IRecipe }> = ({ recipeData }) => { 
    return (
      <div className="recipe-box">
        <h2>{recipeData.name}</h2>
        <img src={recipeData.image} alt={recipeData.name} />
        <p><strong>Ingredients:</strong> {recipeData.ingredients.join(', ')}</p>
        <p><strong>Instructions:</strong> {recipeData.instructions.join(', ')}</p>
      </div>
    );
};
  
  export default Recipe;