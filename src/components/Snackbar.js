import React, { useEffect, useState } from 'react';
import './Snackbar.css';

const Snackbar = ({ message, type = 'error', isOpen, onClose, duration = 4000, index = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          onClose();
        }, 300);
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen && !isVisible) {
    return null;
  }

  return (
    <div 
      className={`snackbar ${type} ${isVisible ? 'show' : 'hide'}`}
    >
      <div className="snackbar-content">
        <div className="snackbar-icon">
          {type === 'error' && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          )}
          {type === 'success' && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          )}
          {type === 'info' && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          )}
        </div>
        <p className="snackbar-message">{message}</p>
        <button className="snackbar-close" onClick={() => {
          setIsVisible(false);
          setTimeout(() => onClose(), 300);
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

// Snackbar Container Component to manage multiple snackbars
export const SnackbarContainer = ({ snackbars, onClose }) => {
  return (
    <div className="snackbar-container">
      {snackbars.map((snackbar, index) => (
        <Snackbar
          key={snackbar.id}
          message={snackbar.message}
          type={snackbar.type}
          isOpen={snackbar.isOpen}
          onClose={() => onClose(snackbar.id)}
          duration={snackbar.duration || (snackbar.type === 'success' ? 5000 : 4000)}
          index={index}
        />
      ))}
    </div>
  );
};

export default Snackbar;
