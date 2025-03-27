import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import propertiesData from '../data/properties.json';
import landingImage from '../assets/landing-image.jpg';

/**
 * Home component: Displays the main page with a property search form and results.
 */
function Home() {
  // State for managing the search criteria entered by the user.
  const [searchCriteria, setSearchCriteria] = useState({
    type: 'any',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    dateFrom: '',
    dateTo: '',
    postcode: '',
  });
  // State to hold the results of the property search.
  const [searchResults, setSearchResults] = useState([]);

  // On initial render, load all properties as the initial search results.
  useEffect(() => {
    setSearchResults(propertiesData.properties);
  }, []);

  // Filters the properties based on the current search criteria.
  const handleSearch = (criteria) => {
    setSearchCriteria(criteria); // Updates the search criteria state.

    const filteredProperties = propertiesData.properties.filter(property => {
      if (criteria.type !== 'any' && property.type.toLowerCase() !== criteria.type.toLowerCase()) return false;
      if (criteria.minPrice && property.price < parseInt(criteria.minPrice)) return false;
      if (criteria.maxPrice && property.price > parseInt(criteria.maxPrice)) return false;
      if (criteria.minBedrooms && property.bedrooms < parseInt(criteria.minBedrooms)) return false;
      if (criteria.maxBedrooms && property.bedrooms > parseInt(criteria.maxBedrooms)) return false;
      if (criteria.dateFrom && new Date(property.added.year, monthToNumber(property.added.month) - 1, property.added.day) < new Date(criteria.dateFrom)) return false;
      if (criteria.dateTo && new Date(property.added.year, monthToNumber(property.added.month) - 1, property.added.day) > new Date(criteria.dateTo)) return false;
      if (criteria.postcode && !property.location.address.toLowerCase().includes(criteria.postcode.toLowerCase())) return false;
      return true;
    });

    setSearchResults(filteredProperties); // Updates the search results state.
  };

  // Helper function to convert month name to month number.
  const monthToNumber = (monthName) => {
    const monthMap = {
      'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
      'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
    };
    return monthMap[monthName];
  };

  // Handles the form submission to trigger the search.
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchCriteria);
  };

  // Updates the search criteria state when input values change.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria(prevCriteria => ({
      ...prevCriteria,
      [name]: value
    }));
  };

  return (
    <div className="home-page">
      {/* Landing Section with Background Image */}
      <div className="landing-section" style={{ backgroundImage: `url(${landingImage})` }}>
        <div className="overlay">
          <div className="search-area">
            {/* Search Form */}
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="type">Property Type:</label>
                <select id="type" name="type" value={searchCriteria.type} onChange={handleInputChange}>
                  <option value="any">Any</option>
                  <option value="house">House</option>
                  <option value="flat">Flat</option>
                  <option value="bungalow">Bungalow</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="minPrice">Min Price:</label>
                <input type="number" id="minPrice" placeholder="Min Price" name="minPrice" value={searchCriteria.minPrice} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="maxPrice">Max Price:</label>
                <input type="number" id="maxPrice" placeholder="Max Price" name="maxPrice" value={searchCriteria.maxPrice} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="minBedrooms">Min Bedrooms:</label>
                <input type="number" id="minBedrooms" placeholder="Min Bedrooms" name="minBedrooms" value={searchCriteria.minBedrooms} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="maxBedrooms">Max Bedrooms:</label>
                <input type="number" id="maxBedrooms" placeholder="Max Bedrooms" name="maxBedrooms" value={searchCriteria.maxBedrooms} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="dateFrom">Date From:</label>
                <input type="date" id="dateFrom" name="dateFrom" value={searchCriteria.dateFrom} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="dateTo">Date To:</label>
                <input type="date" id="dateTo" name="dateTo" value={searchCriteria.dateTo} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="postcode">Postcode Area:</label>
                <input type="text" id="postcode" placeholder="Eg: BR4" name="postcode" value={searchCriteria.postcode} onChange={handleInputChange} />
              </div>
              <div className="button-wrapper">
                <button type="submit" className="search-button">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {/* Search Results Section */}
        <section className="search-results">
          <div className="property-list">
            {searchResults.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;