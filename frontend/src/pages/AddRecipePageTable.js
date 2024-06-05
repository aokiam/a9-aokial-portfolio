import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddRecipePageTable = () => {

    const [dish, setDish]       = useState('');
    const [servings, setServings]   = useState('');
    const [origin, setOrigin] = useState('');
    const [date, setDate] = useState();
    
    const redirect = useNavigate();

    const addRecipe = async () => {
        const newRecipe = { dish, servings, origin, date };
        const response = await fetch('/recipes', {
            method: 'post',
            body: JSON.stringify(newRecipe),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Recipe successfully added to the recipe book, let's get cooking!`);
        } else {
            alert(`There was an issue adding the recipe = ${response.status}`);
        }
        redirect("/recipes");
    };


    return (
        <>
        <article>
            <h2>Add a recipe</h2>
            <p>Use this page to add a recipe to the recipe book.</p>
            <fieldset class="orderForms">
            <table id="recipes">
                <caption>Which recipe are you adding?</caption>
                <thead>
                    <tr>
                        <th>Dish</th>
                        <th>Servings</th>
                        <th>Origin</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="dish">Name of dish</label>
                        <input
                            reuired autoFocus
                            type="text"
                            placeholder="Name of the recipe"
                            value={dish}
                            onChange={e => setDish(e.target.value)} 
                            id="dish"
                            autofocus />
                    </td>

                    <td><label for="servings">Servings yielded</label>
                        <input
                            required
                            type="number"
                            value={servings}
                            placeholder="Servings the recipe makes"
                            onChange={e => setServings(e.target.value)} 
                            id="servings" />
                    </td>

                    <td><label for="origin">Place of origin</label>
                        <input
                            required
                            type="text"
                            placeholder="Where did this dish originate from"
                            value={origin}
                            onChange={e => setOrigin(e.target.value)} 
                            id="origin" />
                    </td>

                    <td><label for="date">Date cooked</label>
                        <input
                            required
                            type="date"
                            value={date}
                            placeholder="Date you cooked this dish"
                            onChange={e => setDate(e.target.value)}
                            id="date"/>
                    </td>

                    <td>
                    <label for="submit">Add Recipe</label>
                        <button
                            type="submit"
                            onClick={addRecipe}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </fieldset>
        </article>
    </>
);
}

export default AddRecipePageTable;