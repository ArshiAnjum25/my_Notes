import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 My Website. All rights reserved.</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
