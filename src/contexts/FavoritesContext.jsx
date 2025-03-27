import React, { createContext, useState, useEffect, useContext } from 'react';

// Creates context for managing favorite items.
const FavoritesContext = createContext();

// Hook to access the favorites context.
export const useFavorites = () => useContext(FavoritesContext);

// Provides the favorites context to its children.
export const FavoritesProvider = ({ children }) => {
  // State for the list of favorite properties, initialized from local storage.
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Persists favorites to local storage on changes.
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Adds a property to the favorites.
  const addFavorite = (property) => {
    setFavorites(prevFavorites => [...prevFavorites, property]);
  };

  // Removes a property from favorites by its ID.
  const removeFavorite = (propertyId) => {
    setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== propertyId));
  };

  // Clears all favorites.
  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};