import React from 'react';
import Recipe, { IRecipe } from './Recipe';

interface IRecipeListProps {
    recipes: IRecipe[];
}

const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
    return (
        <div>
            {recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <Recipe key={recipe.id} recipeData={recipe} />
                ))
            ) : (
                <p>No recipes found for this tag.</p>
            )}
        </div>
    );
}
  
  export default RecipeList;