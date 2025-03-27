import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component for navigation.
import { useFavorites } from '../contexts/FavoritesContext'; // Import the custom hook for managing favorite properties.
import noImage from '../assets/no-image.png'; // Import a default image for properties without a specific image.

// Images mapping: Associates property IDs with their corresponding image file paths.
// This approach allows for easy referencing of images based on property ID.
const propertyImages = {
  prop1: require('../assets/prop1.jpg'),
  prop2: require('../assets/prop2.jpg'),
  prop3: require('../assets/prop3.jpg'),
  prop4: require('../assets/prop4.jpg'),
  prop5: require('../assets/prop5.jpg'),
  prop6: require('../assets/prop6.jpg'),
  prop7: require('../assets/prop7.jpg'),
  prop8: require('../assets/prop8.jpg'),
  prop9: require('../assets/prop9.jpg'),
  prop10: require('../assets/prop10.jpg'),
  prop11: require('../assets/prop11.jpg'),
  prop12: require('../assets/prop12.jpg'),
};

/**
 * PropertyCard Component.
 * Renders a card displaying details for a single property.
 * It includes an image, property information, a "View Details" link, and a button to add/remove from favorites.
 */
function PropertyCard({ property }) {
  // Access the favorites context to get the current favorites and the functions to add/remove them.
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  // Check if the current property is in the list of favorites.
  const isFavorite = favorites.some((fav) => fav.id === property.id);

  /**
   * Handles the toggling of a property's favorite status.
   * If the property is a favorite, it removes it; otherwise, it adds it to the favorites.
   */
  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(property.id);
    } else {
      addFavorite(property);
    }
  };

  // Determine the image source for the property. If a specific image exists for the property's ID, use it; otherwise, use the default 'noImage'.
  const imageSrc = propertyImages[property.id] || noImage;

  return (
    <div className="property-card">
      <div className="property-card-image">
        {/* Display the property image or the default no-image if not found. */}
        <img src={imageSrc} alt={property.title} />
      </div>
      <div className="property-card-content">
        <h3>{property.title}</h3>
        <p className="price">Price: ${property.price.toLocaleString()}</p>
        <p>Bedrooms: {property.bedrooms}</p>
        <p>Type: {property.type}</p>
        <p>Location: {property.location.address}</p>
        <div className="property-card-actions">
          {/* Link to the detailed view of the property using the property's ID. */}
          <Link to={`/property/${property.id}`} className="view-details-button">
            View Details
          </Link>
          {/* Button to toggle the favorite status of the property. The button's text and class change based on whether the property is a favorite. */}
          <button
            onClick={handleFavoriteToggle}
            className={isFavorite ? 'remove-favorite' : 'add-favorite'}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;