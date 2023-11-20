// App.js
import React from 'react';
import './App.css';
import RightContent from './components/RightContent';
import NavBar from './components/NavBar';
import LeftSection from './components/LeftSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <div className='app-nav'>
      <NavBar />
      </div>
      

      <div className="main-app-container">
        <div className="left-section">
          <LeftSection />
        </div>
        <div className="right-section">
          <RightContent />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
