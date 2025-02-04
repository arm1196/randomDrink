import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import logoBetagen from './img/Begood.jpg';

// ประกาศตัวแปร linkDoc
const linkDoc =
  'https://docs.google.com/forms/d/e/1FAIpQLScl7o7yz-ig71UNHbWuE3dUS7BdFMArH-3SuAvXpsQRiU7H3Q/viewform';

const App = () => {
  return (
    <Router>
      <nav
        style={{
          backgroundColor: '#f2f2f2',
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* ลิงก์ Home พร้อมโลโก้ */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={logoBetagen}
            alt="Logo Betagen"
            style={{
              height: '80px',
              width: 'auto',
            }}
          />
        </Link>

        {/* ลิงก์ Google Forms */}
        <a
          href={linkDoc}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#fff',
            backgroundColor: '#007bff',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          แนะนำของอร่อย
        </a>
      </nav>

      <Routes>
        {/* หน้า Home */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
