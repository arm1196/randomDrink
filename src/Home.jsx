import React, { useState } from 'react';
import './Home.css';
import messages from './data/messages';
import logoBatagen from './img/logoBetagen.jpg';
import Bebackground from './img/BG.jpg';

const categoryMap = {
  1: 'ผัก',
  2: 'ขนม',
  3: 'ผลไม้',
  4: 'เมนูแปลก'
};

const colorMap = {
  1: 'ม่วง',
  2: 'แดง',
  3: 'ฟ้า',
  4: 'ชมพู',
  5: 'เขียว',
  6: 'เหลือง',
  7: 'ขาว',
  8: 'น้ำตาล',
  9: 'ส้ม'
};

const Home = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showEffect, setShowEffect] = useState(false);
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');

  const handleRandomize = () => {
    setIsSpinning(true);
    setShowEffect(true);

    setTimeout(() => {
      setShowEffect(false);
      const filteredMessages = messages.filter(msg => 
        (!category || msg.category === parseInt(category)) &&
        (!color || msg.color === parseInt(color))
      );
      
      if (filteredMessages.length === 0) {
        setSelectedMessage({ title: 'ไม่พบข้อมูลที่ตรงเงื่อนไข', description: '' });
      } else {
        const randomIndex = Math.floor(Math.random() * filteredMessages.length);
        setSelectedMessage(filteredMessages[randomIndex]);
      }

      setShowPopup(true);
      setIsSpinning(false);
    }, 3000);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="home-container" style={{ backgroundImage: `url(${Bebackground})` }}>
      <div className="home-card">
        <h1 className="home-title">วันนี้ทานอะไรดี</h1>
        
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">เลือกหมวดหมู่</option>
          {[...new Set(messages.map(msg => msg.category))].map(cat => (
            <option key={cat} value={cat}>{categoryMap[cat] || `หมวดหมู่ ${cat}`}</option>
          ))}
        </select>
        
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="">เลือกสี</option>
          {[...new Set(messages.map(msg => msg.color))].map(col => (
            <option key={col} value={col}>{colorMap[col] || `สี ${col}`}</option>
          ))}
        </select>
        <hr/>

        <button className="home-button" onClick={handleRandomize} disabled={isSpinning}>
          {isSpinning ? 'Spinning...' : 'Random'}
        </button>
      </div>

      {showEffect && (
        <div className="spinning-effect">
          <img src={logoBatagen} alt="Spinning" className="spinning-image" />
        </div>
      )}

      {showPopup && selectedMessage && (
        <div className="popup">
          {selectedMessage.imageUrl && <img src={selectedMessage.imageUrl} alt={selectedMessage.title} />}
          <h2>{selectedMessage.title}</h2>
          <p>{selectedMessage.description}</p>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}

      {showPopup && <div className="popup-overlay" onClick={handleClosePopup}></div>}
    </div>
  );
};

export default Home;
