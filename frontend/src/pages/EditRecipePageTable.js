import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditRecipePageTable = ({ recipeToEdit }) => {
 
    const [dish, setDish]         = useState(recipeToEdit.dish);
    const [servings, setServings] = useState(recipeToEdit.servings);
    const [origin, setOrigin]     = useState(recipeToEdit.origin);
    const [date, setDate]         = useState(recipeToEdit.date.slice(0,10));
    
    const redirect = useNavigate();

    const editRecipe = async () => {
        const response = await fetch(`/recipes/${recipeToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                dish: dish, 
                servings: servings, 
                origin: origin,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`The server successfully recieved your request, let's get cooking!`);
        } else {
            const errMessage = await response.json();
            alert(`Something went wrong, asking the chef for help... ${response.status}. ${errMessage.Error}`);
        }
        redirect("/recipes");
    }

    return (
        <>
        <article>
            <h2>Edit a recipe</h2>
            <p>Use this page to edit an existing recipe.</p>
            <table id="recipes">
                <caption>Which recipe are you editing?</caption>
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
                            type="text"
                            placeholder="Name of the dish"
                            value={dish}
                            onChange={e => setDish(e.target.value)} 
                            id="dish" />
                    </td>

                    <td><label for="servings">Servings yielded</label>
                        <input
                            type="number"
                            value={servings}
                            placeholder="Servings the recipe makes"
                            onChange={e => setServings(e.target.value)} 
                            id="servings" />
                    </td>

                    <td><label for="origin">Place of origin</label>
                        <input
                            type="text"
                            placeholder="Where did this dish originate from"
                            value={origin}
                            onChange={e => setOrigin(e.target.value)} 
                            id="origin" />
                    </td>

                    <td><label for="date">Date cooked</label>
                        <input
                            type="date"
                            value={date}
                            placeholder="Date you cooked this dish"
                            onChange={e => setDate(e.target.value)}
                            id="date" />
                    </td>

                    <td>
                    <label for="submit">Make Changes</label>
                        <button
                            type="submit"
                            onClick={editRecipe}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditRecipePageTable;