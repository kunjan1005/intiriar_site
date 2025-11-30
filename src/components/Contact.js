import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    projectType: '',
    bhkType: '',
    carpetArea: '',
    designTypes: [],
    consultationType: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // For phone input, automatically add +91 prefix and limit to 10 digits
    if (name === 'phone') {
      let phoneValue = value.trim();
      
      if (!phoneValue) {
        setFormData({
          ...formData,
          [name]: ''
        });
        return;
      }
      
      phoneValue = phoneValue.replace(/[^\d+]/g, '');
      
      if (phoneValue && !phoneValue.startsWith('+91') && !phoneValue.startsWith('91')) {
        const digits = phoneValue.replace(/\D/g, '').substring(0, 10);
        if (digits) {
          phoneValue = '+91' + digits;
        } else {
          phoneValue = '';
        }
      } else if (phoneValue.startsWith('91') && !phoneValue.startsWith('+91')) {
        const digits = phoneValue.substring(2).replace(/\D/g, '').substring(0, 10);
        if (digits) {
          phoneValue = '+91' + digits;
        } else {
          phoneValue = '';
        }
      } else if (phoneValue.startsWith('+91')) {
        const digits = phoneValue.substring(3).replace(/\D/g, '').substring(0, 10);
        if (digits) {
          phoneValue = '+91' + digits;
        } else {
          phoneValue = phoneValue.length <= 3 ? '' : '+91';
        }
      } else {
        phoneValue = '';
      }
      
      setFormData({
        ...formData,
        [name]: phoneValue
      });
    } else if (type === 'checkbox' && name.startsWith('designType_')) {
      const designType = name.replace('designType_', '');
      setFormData(prev => {
        const currentTypes = prev.designTypes || [];
        if (checked) {
          return {
            ...prev,
            designTypes: [...currentTypes, designType]
          };
        } else {
          return {
            ...prev,
            designTypes: currentTypes.filter(type => type !== designType)
          };
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setFormMessage({
        type: 'error',
        text: 'Please fill in all required fields (Name, Email, Service, and Message).'
      });
      return;
    }

    // Simulate form submission
    setFormMessage({
      type: 'success',
      text: 'Thank you for your message! We will get back to you soon.'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      timeline: '',
      projectType: '',
      bhkType: '',
      carpetArea: '',
      designTypes: [],
      consultationType: '',
      message: ''
    });

    // Hide message after 5 seconds
    setTimeout(() => {
      setFormMessage({ type: '', text: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Create Something Beautiful</h2>
          <p className="section-subtitle">
            Ready to start your project? Fill out the form below and we'll get back to you within 24-48 hours.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Quick Contact</h3>
            {/* <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>info@elitedesign.com</p>
              </div>
            </div> */}
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+91 9099711640</p>
              </div>
            </div>
            {/* <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>123 Design Street, Creative City, CC 12345</p>
              </div>
            </div> */}
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              {/* <a href="#" className="social-link">Facebook</a> */}
              {/* <a href="#" className="social-link">Pinterest</a> */}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group form-group-half">
                <label htmlFor="name" className="form-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group form-group-half">
                <label htmlFor="email" className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group form-group-half">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group form-group-half">
                <label htmlFor="service" className="form-label">
                  Service <span className="required">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Select Service</option>
                  <optgroup label="Residential">
                    <option value="residential-full">Full Home Design</option>
                    <option value="residential-living">Living Room</option>
                    <option value="residential-bedroom">Bedroom</option>
                    <option value="residential-kitchen">Kitchen Design</option>
                    <option value="residential-bathroom">Bathroom</option>
                    <option value="residential-home-office">Home Office</option>
                  </optgroup>
                  <optgroup label="Corporate">
                    <option value="corporate-executive">Executive Office</option>
                    <option value="corporate-open-space">Open Workspace</option>
                    <option value="corporate-conference">Conference Room</option>
                    <option value="corporate-full">Full Office Redesign</option>
                  </optgroup>
                  <optgroup label="Consultation">
                    <option value="space-planning">Space Planning</option>
                    <option value="consultation-color">Color Consultation</option>
                    <option value="consultation-material">Material Selection</option>
                    <option value="consultation-virtual">Virtual Consultation</option>
                  </optgroup>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-row three-columns">
              <div className="form-group form-group-third">
                <label htmlFor="budget" className="form-label">Budget</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select Budget</option>
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
              <div className="form-group form-group-third">
                <label htmlFor="timeline" className="form-label">Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select Timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3-months">1-3 Months</option>
                  <option value="3-6-months">3-6 Months</option>
                  <option value="6-12-months">6-12 Months</option>
                  <option value="12-plus-months">12+ Months</option>
                </select>
              </div>
              <div className="form-group form-group-third">
                <label htmlFor="projectType" className="form-label">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select Project Type</option>
                  <option value="residential">Residential</option>
                  <option value="corporate">Corporate</option>
                  <option value="consultation">Consultation</option>
                  <option value="new-construction">New Construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="redesign">Redesign</option>
                  <option value="furnishing">Furnishing</option>
                </select>
              </div>
            </div>

            {/* Conditional Fields based on Project Type */}
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
                  <label htmlFor="carpetArea" className="form-label">Carpet Area (sq.ft.)</label>
                  <input
                    type="number"
                    id="carpetArea"
                    name="carpetArea"
                    placeholder="Enter carpet area"
                    value={formData.carpetArea}
                    onChange={handleChange}
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
                          name={`designType_${design}`}
                          checked={formData.designTypes.includes(design)}
                          onChange={handleChange}
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

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Project Details <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us about your project, style preferences, and any specific requirements..."
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
            {formMessage.text && (
              <div className={`form-message ${formMessage.type}`}>
                {formMessage.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;







