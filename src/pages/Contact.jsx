import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import logo from '../assets/logo.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message.');
      }
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-section">
        <div className="contact-info">
          <img src={logo} alt="SalesFirst Logo" className="contact-logo" />
          <div className="contact-details">
            <div className="contact-row">
                <FaPhone className="contact-icon" />
                <span>+1 (240) 560-9090</span>
            </div>
            <div className="contact-row">
                <FaEnvelope className="contact-icon" />
                <span>info@salesfirst.com</span>
            </div>
            <div className="contact-row">
                <FaMapMarkerAlt className="contact-icon" />
                <span>409 Main Street, Kingston, New York</span>
            </div>
          </div>
          
        </div>

        <p className="contact-disclaimer">
        Please note that we are not estate agents / brokers and all the ads on the site have been posted by the owner/agent of that property directly. Therefore if you wish to get more information on the property please contact the advertiser of that property directly. 
        </p>
      </div>

      <div className="contact-form-section">
        <h2 className="form-title">Contact Us</h2>
        {submitSuccess && (
          <div className="success-message">
            Thank you for your message! We'll be in touch shortly.
          </div>
        )}
        {submitError && (
          <div className="error-message">
            Error: {submitError}
          </div>
        )}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Email'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;