"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null); // Изменено здесь

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        if (!query) return;
        setLoading(true);
        const response = await axios.get(`https://api.edamam.com/search`, {
          params: {
            q: query,
            app_id: "dc3a6efe",
            app_key: "f5a24df5188782e061d36bd8cf98af8e",
            to: 6
          }
        });
        setRecipes(response.data.hits);
      } catch (error: any) { // И здесь
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  const handleSearch = (e: any) => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value.trim();
    if (searchQuery) {
      setQuery(searchQuery);
    }
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div>
      <header className="flex justify-between items-center mb-4 bg-blue-500 p-6 w-full h-20">
        <div className="flex items-center space-x-8">
          <span className="text-3xl font-bold text-white">Chef.in</span>
          <nav className="flex space-x-4">
            <Link 
              href="/" 
              className="text-lg font-medium px-4 py-2 rounded-lg text-white bg-blue-700 hover:bg-blue-900"
            >
              Recipes
            </Link>
            <Link 
              href="/chat" 
              className="text-lg font-medium px-4 py-2 rounded-lg text-white bg-blue-700 hover:bg-blue-900"
            >
              Chat
            </Link>
          </nav>
        </div>
      </header>
      <form onSubmit={handleSearch} className="mb-4 flex justify-center">
        <input 
          type="text" 
          name="search" 
          placeholder="Search recipes..." 
          className="border p-2 rounded-lg shadow-md w-1/2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded-lg ml-2 shadow-md hover:bg-blue-700"
        >
          Search
        </button>
        <button 
          type="button" 
          className="bg-red-500 text-white p-2 rounded-lg ml-2 shadow-md hover:bg-red-700"
          onClick={handleClear}
        >
          Clear
        </button>
      </form>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Error fetching recipes: {error.message}</p>} {/* Изменено здесь */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe: any, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-xl font-semibold">{recipe.recipe.label}</h2>
            <img 
              src={recipe.recipe.image} 
              alt={recipe.recipe.label} 
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <p>Calories: {Math.round(recipe.recipe.calories)}</p>
            <a 
              href={recipe.recipe.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:text-blue-700"
            >
              View Recipe
            </a>
          </div>
        ))}
      </div>
      <footer className="mt-8 text-center text-sm text-gray-500">
        made by Yerassyl Serik
      </footer>
    </div>
  );
};

export default RecipeList;
