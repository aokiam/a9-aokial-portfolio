// Controllers for the Recipe Collection

import 'dotenv/config';
import express from 'express';
import * as recipes from './recipe-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/recipes', (req,res) => { 
    recipes.createRecipe(
        req.body.dish, 
        req.body.servings, 
        req.body.origin,
        req.body.date
        )
        .then(recipe => {
            console.log(`"${recipe.dish}" was added to the recipe book.`);
            res.status(201).json(recipe);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Could not be processed or recognized because the kitchen burnt down!' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/recipes', (req, res) => {
    recipes.retrieveRecipes()
        .then(recipe => { 
            if (recipe !== null) {
                console.log(`All recipes were retrieved from the recipe book.`);
                res.json(recipe);
            } else {
                res.status(404).json({ Error: 'Who let you cook!? Resource could not be found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Could not be processed or recognized because the kitchen burnt down!' });
        });
});


// RETRIEVE by ID controller
app.get('/recipes/:_id', (req, res) => {
    recipes.retrieveRecipeByID(req.params._id)
    .then(recipe => { 
        if (recipe !== null) {
            console.log(`"${recipe.dish}" was retrieved, based on its ID.`);
            res.json(recipe);
        } else {
            res.status(404).json({ Error: 'Who let you cook!? Resource could not be found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Could not be processed or recognized because the kitchen burnt down!' });
    });

});


// UPDATE controller ************************************
app.put('/recipes/:_id', (req, res) => {
    recipes.updateRecipe(
        req.params._id, 
        req.body.dish, 
        req.body.servings, 
        req.body.origin,
        req.body.date
    )
    .then(recipe => {
        console.log(`"${recipe.dish}" was updated.`);
        res.json(recipe);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Could not be processed or recognized because the kitchen burnt down!' });
    });
});


// DELETE Controller ******************************
app.delete('/recipes/:_id', (req, res) => {
    recipes.deleteRecipeById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} recipe was deleted.`);
                res.status(200).send({ Success: 'Recipe successfully removed from the recipe book.' });
            } else {
                res.status(404).json({ Error: 'What are you trying to cook? Recipe could not be found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: "Oh no, we're cooked..." });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});