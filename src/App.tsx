import React, { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';
import { IRecipe } from './Recipe';

const App = () => {
  const [tagList, setTagList] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipeList, setRecipeList] = useState<IRecipe[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes/tags')
      .then(response => response.json())
      .then(data => setTagList(data));
  }, []);

  useEffect(() => {
    if (selectedTag) {
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then(response => response.json())
        .then(data => {
          console.log("Fetched Recipes:", data);
          setRecipeList(data.recipes || []);
        })
        .catch(err => console.error("Error fetching recipes:", err));
    }
  }, [selectedTag]);

  const handleTagSelect = (tagName: string) => {
    setSelectedTag(tagName);
  };

  const handleBack = () => {
    setSelectedTag(null);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      
      {selectedTag === null ? (
        <RecipeTagList tagList={tagList} onSelectTag={handleTagSelect} />
      ) : (
        <div>
          <button onClick={handleBack}>Back to Tags</button>
          <RecipeList recipes={recipeList} />
        </div>
      )}
    </div>
  );
};

export default App;
