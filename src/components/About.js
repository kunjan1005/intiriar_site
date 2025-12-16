import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Miirus Work Style</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">We are keen to work with the Contemporary Interior Design style which inspired by all the design styles in the past including minimalism, modernism, Art Deco, and even the historical design. It has clean lines and smooth surfaces offering an orderly appearance of the space.</p>
            <p>We use a lot of natural light, materials are eco-friendly or recycled with a lot of focus on energy conservation, colors are usually neutral with a dash of vibrancy using a brightly-colored sofa or painting, furniture and lighting fixtures are chosen from various eras to accentuate the space.</p>
          </div>
          <div className="about-image">
            <img 
              src="/images/about-us.jpeg" 
              alt="Architect's Desk with Blueprints"
              className="about-img"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




