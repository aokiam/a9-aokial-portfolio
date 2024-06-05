import React from 'react';
import RecipeHead from './RecipeHead';
import RecipeRow from './RecipeRow';



// Change the function names and parameters 
// to fit your portfolio topic and schema.

function RecipeList({ recipes, onDelete, onEdit }) {
    return (
        <table id="recipeList">
            <caption class="desc">Your list of recently cooked recipes, boss!</caption>
            <RecipeHead />
            <tbody>
                {recipes.map((recipe, i) =>
                    <RecipeRow
                        recipe={recipe}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />)}
            </tbody>
        </table>
    );
}

export default RecipeList;
