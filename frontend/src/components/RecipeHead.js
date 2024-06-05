import React from 'react';
import { Link } from 'react-router-dom';
import { LuPlusCircle } from "react-icons/lu";

function RecipeHead() {
    return(
        <thead>
            <tr>
                <th title="What is the name of the dish?">Dish</th>
                <th title="How many servings does it yield?">Servings</th>
                <th title="Where does this dish originate?">Origin</th>
                <th title="When did you cook this dish?">Date</th>
                <th title="Click here to edit a recipe.">Edit</th>
                <th title="Click here to delete a recipe.">Delete</th>
                <th><Link to="/create"><i><LuPlusCircle title="Click here to add a recipe to the list."/></i></Link></th>
            </tr>
        </thead>
    );
}

export default RecipeHead;