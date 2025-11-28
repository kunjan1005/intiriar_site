import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      category: 'residential',
      title: 'Luxury Modern Home',
      description: 'Contemporary living space with elegant finishes',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
      alt: 'Modern Living Room',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80'
      ]
    },
    {
      id: 2,
      category: 'corporate',
      title: 'Executive Office Design',
      description: 'Professional workspace with modern aesthetics',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      alt: 'Corporate Office Space',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
      ]
    },
    {
      id: 3,
      category: 'residential',
      title: 'Master Bedroom Suite',
      description: 'Serene retreat with luxury amenities',
      image: 'https://images.unsplash.com/photo-1631889993954-1b881846b60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Elegant Bedroom',
      images: [
        'https://images.unsplash.com/photo-1631889993954-1b881846b60a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1631889993954-1b881846b60a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1631889993954-1b881846b60a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1631889993954-1b881846b60a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      ]
    },
    {
      id: 4,
      category: 'corporate',
      title: 'Modern Conference Hall',
      description: 'State-of-the-art meeting space',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      alt: 'Conference Room',
      images: [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
      ]
    },
    {
      id: 5,
      category: 'residential',
      title: 'Gourmet Kitchen',
      description: 'High-end culinary space with premium appliances',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Kitchen Design',
      images: [
        'https://images.unsplash.com/photo-1556912172-45b7abe8b7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1556912172-45b7abe8b7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1556912172-45b7abe8b7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1556912172-45b7abe8b7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      ]
    },
    {
      id: 6,
      category: 'corporate',
      title: 'Corporate Reception',
      description: 'Welcoming entrance with sophisticated design',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      alt: 'Reception Area',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
      ]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'corporate', label: 'Corporate' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openModal = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => 
          prev === selectedItem.images.length - 1 ? 0 : prev + 1
        );
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => 
          prev === 0 ? selectedItem.images.length - 1 : prev - 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="portfolio-item" 
              data-category={item.category}
              onClick={() => openModal(item)}
            >
              <div className="portfolio-image">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="portfolio-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = item.image.replace('?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=', '?w=');
                  }}
                />
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="view-more">Click to view more →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Slider */}
      {selectedItem && (
        <div className="portfolio-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <h2>{selectedItem.title}</h2>
              <p>{selectedItem.description}</p>
            </div>

            <div className="slider-container">
              <button className="slider-btn prev-btn" onClick={prevImage}>
                ‹
              </button>
              
              <div className="slider-image-wrapper">
                <img 
                  src={selectedItem.images[currentImageIndex]} 
                  alt={`${selectedItem.title} - Image ${currentImageIndex + 1}`}
                  className="slider-image"
                  onError={(e) => {
                    e.target.src = selectedItem.images[currentImageIndex].replace('?ixlib=rb-4.0.3&auto=format&fit=crop&w=', '?w=');
                  }}
                />
              </div>
              
              <button className="slider-btn next-btn" onClick={nextImage}>
                ›
              </button>
            </div>

            <div className="slider-dots">
              {selectedItem.images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            <div className="slider-counter">
              {currentImageIndex + 1} / {selectedItem.images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;




