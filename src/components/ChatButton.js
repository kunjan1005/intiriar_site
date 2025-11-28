import React, { useState, useEffect } from 'react';
import './ChatButton.css';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Always visible, but can hide on very small scroll if needed
    const handleScroll = () => {
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChatClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Here you can integrate with a chat service or redirect to WhatsApp
      const phoneNumber = '1234567890'; // Update with your WhatsApp number
      const whatsappMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className={`chat-button ${isOpen ? 'active' : ''}`}
        onClick={handleChatClick}
        title="Chat with us"
      >
        <svg 
          className="chat-icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        {!isOpen && <span className="chat-badge">1</span>}
      </div>
      
      {isOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <div className="chat-header-info">
              <h4>We're online</h4>
              <p>How may I assist you?</p>
            </div>
            <button className="chat-close" onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chat-messages">
            <div className="chat-message bot">
              <p>Hello! 👋 How can we help you with your interior design project today?</p>
            </div>
          </div>
          <form className="chat-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoFocus
            />
            <button type="submit" className="chat-send">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatButton;

