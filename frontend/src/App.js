// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import RecipeBook from './components/RecipeBook';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 

import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import RecipesPage from './pages/RecipesPage';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires SHORT data input, then use the TABLE design.
import EditRecipePageTable from './pages/EditRecipePageTable';
import AddRecipePageTable from './pages/AddRecipePageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [recipe, recipeToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header class="favicon">
            <h1>Allyson <img
                src="../apple-touch-icon.png"
                alt="Allyson Aoki"
            /> Aoki</h1>
            <p class="desc"><strong>CS290 Web Development</strong>  |  Winter 2024  |  <strong>Oregon State University</strong>  |  Portfolio Project</p>
          </header>

          <RecipeBook />
          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/topics" element={<TopicsPage />}/>
                    <Route path="/recipes" element={<RecipesPage recipe={recipe}/>} />
                    
                    {/* Or these if your schema requires SHORT data input: */}
                     <Route path="/create" element={<AddRecipePageTable />} />   
                     <Route path="/update" element={<EditRecipePageTable recipeToEdit={recipeToEdit} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Allyson Aoki</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;