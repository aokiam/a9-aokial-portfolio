import React from 'react';
import { Link } from 'react-router-dom';
import { RiHomeHeartFill } from "react-icons/ri";
import { GiCookingPot } from "react-icons/gi";
import { FaCode } from "react-icons/fa";

// Change the function names and links
// to fit your portfolio topic.

function RecipeBook() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/"><i><RiHomeHeartFill /></i> Home</Link>
        <Link to="../recipes"><i><GiCookingPot /></i> Recipes</Link>
        <Link to="../topics"><i><FaCode /></i> Topics</Link>
    </nav>
  );
}

export default RecipeBook;
