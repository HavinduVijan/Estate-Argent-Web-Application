import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext'; // Imports the hook to access the favorites context.
import PropertyCard from '../components/PropertyCard'; // Imports the component to display individual property cards.

/**
 * MyWishList component: Displays the user's favorite properties.
 */
function MyWishList() {
  // Accesses the favorites list and the function to clear the favorites from the context.
  const { favorites, clearFavorites } = useFavorites();

  return (
    <div className="wishlist-page">
      <div className="container">
        <h2>My Wish List</h2>
        {/* Conditional rendering based on whether there are any favorite properties. */}
        {favorites.length > 0 ? (
          <>
            {/* Button to clear all properties from the wish list. */}
            <button onClick={clearFavorites} className="clear-favorites-button">
              Clear Wish List
            </button>
            {/* Displays the list of favorite properties using the PropertyCard component. */}
            <div className="favorites-list">
              {favorites.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </>
        ) : (
          // Message displayed when the wish list is empty.
          <p>Your wish list is empty.</p>
        )}
      </div>
    </div>
  );
}

export default MyWishList;