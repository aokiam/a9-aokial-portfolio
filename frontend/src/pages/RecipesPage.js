import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoFastFood } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";



import RecipeList from '../components/RecipeList';

function RecipesPage({ setRecipe }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [recipes, setRecipes] = useState([]);

    // RETRIEVE the entire list of recipes
    const loadRecipes = async () => {
        const response = await fetch('/recipes');
        const recipes = await response.json();
        setRecipes(recipes);
    } 
    

    // UPDATE a single recipe
    const onEditRecipe = async recipe => {
        setRecipe(recipe);
        redirect("/update");
    }


    // DELETE a single recipe  
    const onDeleteRecipe = async _id => {
        const response = await fetch(`/recipes/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/recipes');
            const recipes = await getResponse.json();
            setRecipes(recipes);
        } else {
            console.error(`Recipe not removed with id: ${_id}, because of ${response.status}`)
        }
    }

    // LOAD all the recipes
    useEffect(() => {
        loadRecipes();
    }, []);

    // DISPLAY the recipes
    return (
        <>
            <h2><i><IoFastFood /></i> List of Recipes</h2>
            <article class="desc">
                <p>Keep track of things you've cooked, how much you cooked, where the dish is from, and when you 
                    cooked it! You can add, delete, and edit any entry.</p>
                <p><i><FaStar /></i><strong> Keep it up chef, YOU'RE COOKIN'! </strong><i><FaStar /></i></p>
            

            <fieldset class="orderForms">
                <RecipeList 
                    recipes={recipes} 
                    onEdit={onEditRecipe} 
                    onDelete={onDeleteRecipe} 
                />
            </fieldset>
            </article>
        </>
    );
}

export default RecipesPage;