import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Elite Design</h3>
            <p>Transforming spaces into works of art since 2009.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Residential Design</a></li>
              <li><a href="#services">Corporate Offices</a></li>
              <li><a href="#services">Space Planning</a></li>
              <li><a href="#services">Consultation</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Elite Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







