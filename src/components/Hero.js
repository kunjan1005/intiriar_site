import React, { useState, useRef } from 'react';
import { SnackbarContainer } from './Snackbar';
import './Hero.css';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsappUpdates: false,
    projectType: '',
    bhkType: '',
    carpetArea: '',
    designTypes: [],
    consultationType: '',
    budget: ''
  });
  const [formStep, setFormStep] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [snackbars, setSnackbars] = useState([]);
  const snackbarIdCounter = useRef(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // For phone input, automatically add +91 prefix and limit to 10 digits
    if (name === 'phone') {
      let phoneValue = value.trim();
      
      // If field is empty, keep it empty
      if (!phoneValue) {
        setFormData({
          ...formData,
          [name]: ''
        });
        return;
      }
      
      // Remove all non-digits except +
      phoneValue = phoneValue.replace(/[^\d+]/g, '');
      
      // If user types numbers without +91, add it automatically
      if (phoneValue && !phoneValue.startsWith('+91') && !phoneValue.startsWith('91')) {
        // Extract only digits and limit to 10
        const digits = phoneValue.replace(/\D/g, '').substring(0, 10);
        if (digits) {
          phoneValue = '+91' + digits;
        } else {
          phoneValue = '';
        }
      } else if (phoneValue.startsWith('91') && !phoneValue.startsWith('+91')) {
        // If starts with 91, add + and limit to 10 digits after 91
        const digits = phoneValue.substring(2).replace(/\D/g, '').substring(0, 10);
        if (digits) {
          phoneValue = '+91' + digits;
        } else {
          phoneValue = '';
        }
      } else if (phoneValue.startsWith('+91')) {
        // Keep +91 and only allow 10 digits after
        const digits = phoneValue.substring(3).replace(/\D/g, '').substring(0, 10);
        if (digits) {
          phoneValue = '+91' + digits;
        } else {
          // If no digits after +91, keep only +91 or clear if user is deleting
          phoneValue = phoneValue.length <= 3 ? '' : '+91';
        }
      } else {
        phoneValue = '';
      }
      
      setFormData({
        ...formData,
        [name]: phoneValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const showSnackbar = (message, type = 'error') => {
    const id = snackbarIdCounter.current++;
    const newSnackbar = {
      id,
      message,
      type,
      isOpen: true
    };
    
    setSnackbars(prev => [...prev, newSnackbar]);
  };

  const closeSnackbar = (id) => {
    setSnackbars(prev => prev.filter(snackbar => snackbar.id !== id));
  };

  const handleNext = (e) => {
    e.preventDefault();
    
    if (formStep === 1) {
      // Validate step 1: Name and Phone
      if (!formData.name || !formData.phone) {
        showSnackbar('Please fill in your name and phone number.', 'error');
        return;
      }
      
      const phoneDigits = formData.phone.replace(/\D/g, '').substring(2);
      if (phoneDigits.length !== 10) {
        showSnackbar('Please enter a valid 10-digit phone number.', 'error');
        return;
      }
      
      setFormStep(2);
    } else if (formStep === 2) {
      // Validate step 2: Project Type
      if (!formData.projectType) {
        showSnackbar('Please select a project type.', 'error');
        return;
      }
      
      setFormStep(3);
    } else if (formStep === 3) {
      // Validate step 3: Project-specific details
      if (formData.projectType === 'residential' && !formData.bhkType) {
        showSnackbar('Please select BHK type.', 'error');
        return;
      }
      
      if (formData.projectType === 'corporate') {
        if (!formData.carpetArea) {
          showSnackbar('Please enter carpet area.', 'error');
          return;
        }
        if (formData.designTypes.length === 0) {
          showSnackbar('Please select at least one design type.', 'error');
          return;
        }
      }
      
      if (formData.projectType === 'consultation' && !formData.consultationType) {
        showSnackbar('Please select a consultation type.', 'error');
        return;
      }
      
      setFormStep(4);
    }
  };

  const handleBack = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate budget
    if (!formData.budget) {
      showSnackbar('Please select your budget range.', 'error');
      return;
    }
    
    // Submit form
    console.log('Form submitted:', formData);
    showSnackbar('Thank you! We will contact you soon with a customized quote.', 'success');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      whatsappUpdates: false,
      projectType: '',
      bhkType: '',
      carpetArea: '',
      designTypes: [],
      consultationType: '',
      budget: ''
    });
    setFormStep(1);
    
    // Close dialog if open
    setIsDialogOpen(false);
    
    // Stay on the same page - no redirect
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    // Reset form when closing dialog
    setFormData({
      name: '',
      phone: '',
      whatsappUpdates: false,
      projectType: '',
      bhkType: '',
      carpetArea: '',
      designTypes: [],
      consultationType: '',
      budget: ''
    });
    setFormStep(1);
  };

  const handleDesignTypeChange = (designType) => {
    setFormData(prev => {
      const currentTypes = prev.designTypes || [];
      if (currentTypes.includes(designType)) {
        return {
          ...prev,
          designTypes: currentTypes.filter(type => type !== designType)
        };
      } else {
        return {
          ...prev,
          designTypes: [...currentTypes, designType]
        };
      }
    });
  };

  // Render form content (reusable for both inline and dialog)
  const renderForm = () => (
    <form className="hero-quote-form" onSubmit={formStep === 4 ? handleSubmit : handleNext}>
      <div className="form-header">
        <h3>Designs for Every Budget</h3>
        <span className="form-step">{formStep}/4</span>
      </div>
      <div className="form-body">
        {/* Step 1: Name and Phone */}
        {formStep === 1 && (
          <>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="+91 Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="whatsappUpdates"
                  checked={formData.whatsappUpdates}
                  onChange={handleChange}
                  className="checkbox-input"
                />
                <span className="checkbox-custom"></span>
                <span className="checkbox-text">Send me updates on WhatsApp</span>
              </label>
            </div>
          </>
        )}

        {/* Step 2: Project Type */}
        {formStep === 2 && (
          <div className="form-group">
            <label className="form-label">Select Project Type</label>
            <div className="project-type-options">
              <button
                type="button"
                className={`project-type-btn ${formData.projectType === 'residential' ? 'active' : ''}`}
                onClick={() => setFormData({...formData, projectType: 'residential'})}
              >
                <span className="type-icon">🏠</span>
                <span>Residential</span>
              </button>
              <button
                type="button"
                className={`project-type-btn ${formData.projectType === 'corporate' ? 'active' : ''}`}
                onClick={() => setFormData({...formData, projectType: 'corporate'})}
              >
                <span className="type-icon">🏢</span>
                <span>Corporate</span>
              </button>
              <button
                type="button"
                className={`project-type-btn ${formData.projectType === 'consultation' ? 'active' : ''}`}
                onClick={() => setFormData({...formData, projectType: 'consultation'})}
              >
                <span className="type-icon">💡</span>
                <span>Consultation</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Project-specific details */}
        {formStep === 3 && (
          <>
            {formData.projectType === 'residential' && (
              <div className="form-group">
                <label className="form-label">Select BHK Type</label>
                <div className="bhk-options">
                  {['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', 'Villa', 'Penthouse'].map(bhk => (
                    <button
                      key={bhk}
                      type="button"
                      className={`bhk-btn ${formData.bhkType === bhk ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, bhkType: bhk})}
                    >
                      {bhk}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {formData.projectType === 'corporate' && (
              <>
                <div className="form-group">
                  <label className="form-label">Carpet Area (sq.ft.)</label>
                  <input
                    type="number"
                    name="carpetArea"
                    placeholder="Enter carpet area"
                    value={formData.carpetArea}
                    onChange={handleChange}
                    required
                    className="form-input"
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Select Design Types (Multiple)</label>
                  <div className="design-types-grid">
                    {['Meeting Room', 'Main Desk', 'Admin Desk', 'Reception Area', 'Conference Hall', 'Open Workspace', 'Cafeteria', 'Lounge Area'].map(design => (
                      <label key={design} className="design-type-checkbox">
                        <input
                          type="checkbox"
                          checked={formData.designTypes.includes(design)}
                          onChange={() => handleDesignTypeChange(design)}
                        />
                        <span>{design}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            {formData.projectType === 'consultation' && (
              <div className="form-group">
                <label className="form-label">Select Consultation Type</label>
                <div className="consultation-options">
                  {[
                    { value: 'space-planning', label: 'Space Planning & Layout', icon: '📐' },
                    { value: 'consultation-color', label: 'Color Consultation', icon: '🎨' },
                    { value: 'consultation-material', label: 'Material Selection', icon: '🪵' },
                    { value: 'consultation-furniture', label: 'Furniture Selection', icon: '🪑' },
                    { value: 'consultation-lighting', label: 'Lighting Design', icon: '💡' },
                    { value: 'consultation-virtual', label: 'Virtual Consultation', icon: '💻' }
                  ].map(consultation => (
                    <button
                      key={consultation.value}
                      type="button"
                      className={`consultation-btn ${formData.consultationType === consultation.value ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, consultationType: consultation.value})}
                    >
                      <span className="consultation-icon">{consultation.icon}</span>
                      <span>{consultation.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Step 4: Budget */}
        {formStep === 4 && (
          <div className="form-group">
            <label className="form-label">Select Budget Range</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="">Select Budget Range</option>
              <option value="under-5k">Under ₹5 Lakhs</option>
              <option value="5k-10k">₹5 Lakhs - ₹10 Lakhs</option>
              <option value="10k-25k">₹10 Lakhs - ₹25 Lakhs</option>
              <option value="25k-50k">₹25 Lakhs - ₹50 Lakhs</option>
              <option value="50k-100k">₹50 Lakhs - ₹1 Crore</option>
              <option value="100k-250k">₹1 Crore - ₹2.5 Crores</option>
              <option value="over-250k">Above ₹2.5 Crores</option>
              <option value="not-sure">Not Sure / Prefer to Discuss</option>
            </select>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="form-navigation">
          {formStep > 1 && (
            <button type="button" onClick={handleBack} className="btn-back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span>Back</span>
            </button>
          )}
          {formStep < 4 ? (
            <button type="submit" className="btn-quote">
              Next →
            </button>
          ) : (
            <button type="submit" className="btn-quote">
              GET FREE QUOTE
            </button>
          )}
        </div>
      </div>
      {/* <div className="form-footer">
        <small>By submitting, you agree to our Privacy Policy</small>
      </div> */}
    </form>
  );

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <picture>
          <source 
            media="(min-width: 969px)" 
            srcSet="/images/home-image.jpg" 
          />
          <img 
            src="/images/home-image-mobile.jpg" 
            alt="Luxury Interior Design"
            className="hero-img"
            loading="eager"
            onError={(e) => {
              e.target.src = '/images/home-image-mobile.jpg';
            }}
          />
        </picture>
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title hero-title-desktop">
            Bring home beautiful interiors <span className="highlight">that fit your budget</span>
          </h1>
          <h1 className="hero-title hero-title-mobile">
            BeSpoke Luxury, Within Reach
          </h1>
          <p className="hero-subtitle hero-subtitle-desktop">
            Experience unmatched quality & timely delivery with Miirus
          </p>
        </div>
        
        {/* Desktop: Show form inline */}
        <div className="hero-form-container hero-form-desktop">
          {renderForm()}
        </div>

        {/* Mobile/Tablet: Show Contact Us button */}
        <div className="hero-form-container hero-form-mobile">
          <button className="contact-us-btn" onClick={openDialog}>
            <span className="btn-text">Contact Us</span>
            <span className="btn-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </span>
            <span className="btn-ripple"></span>
          </button>
        </div>
      </div>

      {/* Dialog for Mobile/Tablet */}
      {isDialogOpen && (
        <>
          <div className="dialog-overlay" onClick={closeDialog}></div>
          <div className="dialog-container">
            <div className="dialog-header">
              <h3>Designs for Every Budget</h3>
              <button className="dialog-close-btn" onClick={closeDialog}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="dialog-body">
              {renderForm()}
            </div>
          </div>
        </>
      )}

      {/* Snackbar Container for Notifications */}
      <SnackbarContainer 
        snackbars={snackbars} 
        onClose={closeSnackbar} 
      />
    </section>
  );
};

export default Hero;




