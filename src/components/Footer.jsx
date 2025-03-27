import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Your Estate Agency. All rights reserved.</p>
        <p>Design By H VIJAN</p>
      </div>
    </footer>
  );
}

/**
 * Renders the site's footer, displaying copyright and design information.
 */
export default Footer;