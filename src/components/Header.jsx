import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for navigation within the app

/**
 * Header component for the website.
 * This component renders the top navigation bar of the site, including the logo and main navigation links.
 */
function Header() {
  return (
    <header className="site-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Logo Section (Left side of the header) */}
          <div className="col-md-4">
            {/* Link to the homepage using react-router-dom's Link component */}
            <Link to="/" className="logo d-flex align-items-center">
              {/* Image for the logo */}
              <img src="logo.png" alt="SalesFirst Logo" className="logo-img" />
              {/* Text elements for the logo, including the site title and tagline */}
              <div className="logo-text">
                <h1 className="site-title">SalesFirst</h1>
                <p className="site-tagline">Properties For Sale</p>
              </div>
            </Link>
          </div>

          {/* Main Navigation Section (Right side of the header) */}
          <div className="col-md-8">
            {/* Navigation bar for primary actions like wishlist, updates, and contact */}
            <nav className="main-nav d-flex justify-content-end align-items-center">
              <ul className="nav">
                {/* Wish List link using react-router-dom's Link */}
                <li className="nav-item">
                  <Link to="/my-wish-list" className="nav-link">
                    <i className="fas fa-heart"></i> My Wish List
                  </Link>
                </li>
                {/* Send Me Updates link using react-router-dom's Link */}
                <li className="nav-item">
                  <Link to="/send-me-updates" className="nav-link">
                    <i className="fas fa-user"></i> Send Me Updates
                  </Link>
                </li>
                {/* Contact Us link using react-router-dom's Link */}
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    <i className="fas fa-phone"></i> Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar (Red bar with site-wide links) */}
      <div className="red-nav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {/* Navigation bar for site-wide sections like Home, Invest, etc. */}
              <nav className="sub-nav">
                <ul className="nav justify-content-center">
                  {/* Home link using react-router-dom's Link */}
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  {/* Invest link using react-router-dom's Link */}
                  <li className="nav-item">
                    <Link to="/invest" className="nav-link">Invest</Link>
                  </li>
                  {/* Blog link using react-router-dom's Link */}
                  <li className="nav-item">
                    <Link to="/blog" className="nav-link">Blog</Link>
                  </li>
                  {/* Testimonials link using react-router-dom's Link */}
                  <li className="nav-item">
                    <Link to="/testimonials" className="nav-link">Testimonials</Link>
                  </li>
                  {/* About Us link using react-router-dom's Link */}
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;