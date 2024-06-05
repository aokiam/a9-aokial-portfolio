import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";


function Recipe({ recipe, onEdit, onDelete }) {
    return (
        <tr>
            <td>{recipe.dish}</td>
            <td>{recipe.servings}</td>
            <td>{recipe.origin}</td>
            <td>{recipe.date}</td>
            <td><AiFillEdit onClick={() => onEdit(recipe)} /></td>
            <td><MdDelete onClick={() => onDelete(recipe._id)} /></td>

        </tr>
    );
}

export default Recipe;