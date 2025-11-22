import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Crafting Beautiful Spaces</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">With over 15 years of experience in interior design, we specialize in creating stunning residential and commercial spaces that reflect your unique style and personality.</p>
            <p>Our team of talented designers combines creativity with functionality to transform houses, corporate offices, and commercial spaces into inspiring environments. We believe that great design should not only look beautiful but also enhance the way you live and work.</p>
            <div className="stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Interior Design Team"
              className="about-img"
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=2070&q=80';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




