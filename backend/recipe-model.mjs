// Models for the Recipe Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: "You're not allowed in the kitchen!" });
    } else  {
        console.log('Welcome to the kitchen, get ready to cook!');
    }
});

// SCHEMA: Define the collection's schema.
const recipeSchema = mongoose.Schema({
	dish:       { type: String, required: true },
	servings:   { type: Number, required: true },
	origin:     { type: String, required: true },
    date:       { type: Date,   required: true, default: Date.now }
}); 

// Compile the model from the schema 
// by defining the collection name "Recipes".
const recipes = mongoose.model('Recipe', recipeSchema);


// CREATE model *****************************************
const createRecipe = async (dish, servings, origin, date) => {
    const recipe = new recipes({ 
        dish: dish, 
        servings: servings, 
        origin: origin,
        date: date
    });
    return recipe.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveRecipes = async () => {
    const query = recipes.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveRecipeByID = async (_id) => {
    const query = recipes.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteRecipeById = async (_id) => {
    const result = await recipes.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateRecipe = async (_id, dish, servings, origin, date) => {
    const result = await recipes.replaceOne({_id: _id }, {
        dish: dish,
        servings: servings,
        origin: origin,
        date: date
    });
    return { 
        _id: _id, 
        dish: dish,
        servings: servings,
        origin: origin,
        date: date 
    }
}

// EXPORT the variables for use in the controller file.
export { createRecipe, retrieveRecipes, retrieveRecipeByID, updateRecipe, deleteRecipeById }