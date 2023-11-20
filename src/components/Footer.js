// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for Footer styling

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col text-left">
            {/* First Row */}
            <div className="row">
              <button type="button" className="btn">
                Button 1
              </button>
              <button type="button" className="btn">
                Button 2
              </button>
              <button type="button" className="btn">
                Button 3
              </button>
              <button type="button" className="btn">
                Button 4
              </button>
            </div>
            {/* Second Row */}
            <div className="row mt-2">
              <button type="button" className="btn">
                Button 5
              </button>
              <button type="button" className="btn">
                Button 6
              </button>
              <button type="button" className="btn">
                Button 7
              </button>
              <button type="button" className="btn">
                Button 8
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="col text-right">
          <div className="row">
              <button type="button" className="btn">
                Button 1
              </button>
              <button type="button" className="btn">
                Button 2
              </button>
              <button type="button" className="btn">
                Button 3
              </button>
              <button type="button" className="btn">
                Button 4
              </button>
            </div>
            {/* Second Row */}
            <div className="row mt-2">
              <button type="button" className="btn">
                Button 5
              </button>
              <button type="button" className="btn">
                Button 6
              </button>
              <button type="button" className="btn">
                Button 7
              </button>
              <button type="button" className="btn">
                Button 8
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
