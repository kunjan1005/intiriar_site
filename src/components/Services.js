import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Residential Design',
      description: 'Transform your home into a sanctuary that reflects your lifestyle and personality with our bespoke residential design services.'
    },
    {
      icon: '🏢',
      title: 'Corporate Offices',
      description: 'Create inspiring work environments that boost productivity and reflect your company\'s brand identity and values.'
    },
    {
      icon: '🎨',
      title: 'Space Planning',
      description: 'Optimize your space with intelligent layouts that maximize functionality while maintaining aesthetic appeal.'
    },
    {
      icon: '✨',
      title: 'Consultation',
      description: 'Expert design consultation to help you make informed decisions about colors, materials, and furniture selection.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">What We Offer</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;







