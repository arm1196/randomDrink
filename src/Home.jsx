import React, { useState } from 'react';
import './Home.css';
import messages from './data/messages';
import logoBatagen from './img/logoBetagen.jpg';
import Bebackground from './img/BG.jpg';

const Home = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showEffect, setShowEffect] = useState(false);

  const handleRandomize = () => {
    setIsSpinning(true);
    setShowEffect(true);
    setTimeout(() => {
      setShowEffect(false);
      const randomIndex = Math.floor(Math.random() * messages.length);
      setSelectedMessage(messages[randomIndex]);
      setShowPopup(true);
      setIsSpinning(false);
    }, 3000);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${Bebackground})`,
      }}
    >
      <div className="home-card">
        <h1 className="home-title">วันนี้ทานอะไรดี</h1>
        <button
          className="home-button"
          onClick={handleRandomize}
          disabled={isSpinning}
        >
          {isSpinning ? 'Spinning...' : 'Random'}
        </button>
      </div>

      {showEffect && (
        <div className="spinning-effect">
          <img
            src={logoBatagen}
            alt="Spinning Image"
            className="spinning-image"
          />
        </div>
      )}

      {showPopup && selectedMessage && (
        <div className="popup">
          <img src={selectedMessage.imageUrl} alt={selectedMessage.title} />
          <h2>{selectedMessage.title}</h2>
          <p>{selectedMessage.description}</p>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}

      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}></div>
      )}
    </div>
  );
};

export default Home;
