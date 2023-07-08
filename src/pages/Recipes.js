import React, { useState } from "react";
import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"



export default function Recipes(){
    const [searchTerm, setSearchTerm] = useState('');
   
     const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            
        },
       
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
           
        },
       
    ]
  .sort(() => Math.random() - 0.5);

  const filteredRecipes = recipes.filter((recipe) =>
  recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
);

     const handleSearch = (event) => {
        const Value = event.target.value;
    setSearchTerm(Value);
  };
    
  
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


    return (
            <div>
            <PreviousSearches onSearch={handleSearch} searchTerm={searchTerm} handleInputChange={handleInputChange}/>
            <div className="recipes-container">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} searchTerm={searchTerm} />
          ))
        ) : (
          <p>No matching recipes found.</p>
        )}
      </div>
          </div>
    )
}