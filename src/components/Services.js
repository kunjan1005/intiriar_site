import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      image: '/images/services/residential-design.jpg',
      title: 'Residential Design',
      description: 'Transform your home with personalized contemporary interiors that reflect your unique lifestyle and preferences.'
    },
    {
      image: '/images/services/commercial-design.jpg',
      title: 'Commercial Design',
      description: 'Create inspiring workspaces that enhance productivity and align with your brand identity.'
    },
    {
      image: '/images/services/space-planning.jpg',
      title: 'Space Planning',
      description: 'Optimize layouts for maximum functionality while maintaining aesthetic harmony and flow.'
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
              <div className="service-icon">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-icon-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
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







