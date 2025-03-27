import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';
import propertiesData from '../data/properties.json';
import noImage from '../assets/no-image.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Images mapping: Associates property IDs with their corresponding image assets.
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
 * PropertyDetails component: Displays detailed information for a specific property.
 */
function PropertyDetails() {
  // Extracts the property ID from the URL parameters.
  const { id } = useParams();
  // Finds the corresponding property data based on the ID.
  const property = propertiesData.properties.find((p) => p.id === id);
  // State to manage the active tab in the tabbed interface.
  const [tabIndex, setTabIndex] = useState(0);
  // Accesses the favorites context for managing favorite properties.
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  // Checks if the current property is in the favorites list.
  const isFavorite = favorites.some((fav) => fav.id === property.id);

  // Determines the image source, using a default image if the property's image is not found.
  const imageSrc = propertyImages[property.id] || noImage;

  // Displays a message if the property with the given ID is not found.
  if (!property) {
    return <div className="container">Property not found</div>;
  }

  // Toggles the favorite status of the current property.
  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(property.id);
    } else {
      addFavorite(property);
    }
  };

  // Custom marker icon for the map.
  const markerIcon = new L.Icon({
    iconUrl: require('../assets/marker-icon.png'), // Path to the marker icon.
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="property-details container">
      <div className="property-details-header">
        <h2>{property.title}</h2>
        {/* Button to add or remove the property from favorites. */}
        <button
          onClick={handleFavoriteToggle}
          className={isFavorite ? 'remove-favorite' : 'add-favorite'}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
      <div className="property-details-body">
        <div className="image-gallery">
          {/* Main image of the property. */}
          <img src={imageSrc} alt={`${property.title || property.type}`} className="main-image" />
        </div>

        <div className="details-content">
          {/* Tabbed interface for displaying property details, floor plan, and map. */}
          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
              <Tab>Description</Tab>
              <Tab>Floor Plan</Tab>
              <Tab>Map</Tab>
            </TabList>

            {/* Description tab panel. */}
            <TabPanel>
              <div className="tab-content">
                <p>{property.description}</p>
                <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
                <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                <p><strong>Type:</strong> {property.type}</p>
                <p><strong>Tenure:</strong> {property.tenure}</p>
                <p>
                  <strong>Date Added:</strong> {property.added.month} {property.added.day}, {property.added.year}
                </p>
              </div>
            </TabPanel>
            {/* Floor plan tab panel. */}
            <TabPanel>
              <div className="tab-content floor-plan">
                {property.floorPlan ? (
                  <img src={require(`../${property.floorPlan}`)} alt="Floor Plan" />
                ) : (
                  <p>No floor plan available for this property.</p>
                )}
              </div>
            </TabPanel>
            {/* Map tab panel. */}
            <TabPanel>
              <div className="tab-content map-container">
                {/* Leaflet map displaying the property's location. */}
                <MapContainer center={[property.location.lat, property.location.lng]} zoom={15} style={{ width: '100%', height: '400px' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[property.location.lat, property.location.lng]} icon={markerIcon}>
                    <Popup>{property.location.address}</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;