import React from 'react';
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";



function RecipeRow({ recipe, onDelete, onEdit }){
    return(
        <tr>
            <td title="What is the name of your dish?">{recipe.dish}</td>
            <td title="How many servings does it yield?">{recipe.servings}</td>
            <td title="Where does this dish originate?">{recipe.origin}</td>
            <td title="When did you cook this dish?">{recipe.date}</td>
            <td><i><AiFillEdit onClick={() => onEdit(recipe)}
                title="Click to edit this recipe's information."/></i></td>
            <td><i><MdDelete onClick={() => onDelete(recipe._id)} 
                title="Click to delete this recipe."/></i></td>
        </tr>
    );
}

export default RecipeRow;