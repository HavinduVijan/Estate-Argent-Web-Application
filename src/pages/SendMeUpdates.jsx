import React, { useState } from 'react';

function SendMeUpdates() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    preferences: {
      usMarketUpdates: false,
      globalRealEstateNews: false,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      preferences: {
        ...prevFormData.preferences,
        [name]: checked
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null); // Clear any previous errors

    // Simulate sending data to a server (replace with your actual API call)
    try {
      const response = await fetch('/api/subscribe', { // Replace with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ // Clear form data on success
          email: '',
          firstName: '',
          lastName: '',
          preferences: {
            usMarketUpdates: false,
            globalRealEstateNews: false,
          },
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to subscribe.');
      }
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="send-me-updates-page container">
      <h2 className="page-title">Send Me Updates</h2>
      <p className="page-description">
        Register to receive email notifications of new properties for sale, updates on the US real estate market, and global real estate news.
      </p>

      {submitSuccess && (
        <div className="success-message">
          Thank you for subscribing! You will receive updates soon.
        </div>
      )}

      {submitError && (
        <div className="error-message">
          Error: {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="updates-form">
        <div className="form-group">
          <label htmlFor="email">Email Address*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Please choose which newsletters you would like to receive*</label>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="usMarketUpdates"
              name="usMarketUpdates"
              checked={formData.preferences.usMarketUpdates}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="usMarketUpdates">US Real Estate Market Updates</label>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="globalRealEstateNews"
              name="globalRealEstateNews"
              checked={formData.preferences.globalRealEstateNews}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="globalRealEstateNews">Global Real Estate News</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>

        {/* Add reCAPTCHA or other spam prevention here */}
      </form>
    </div>
  );
}

export default SendMeUpdates;