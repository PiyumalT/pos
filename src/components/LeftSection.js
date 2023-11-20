import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';
import './LeftSection.css';

const LeftSection = () => {
  return (
    <div className="left-section white-box">
      {/* First row */}
      <div className="row">
        <div className='box'>
            <div className="profile-icon-2">
            <FontAwesomeIcon icon={faUser} className="fa-user" />
            </div>
            <select className="dropdown">
            <option>Please select</option>
            </select>
            <div className="arrow-circle">
            <FontAwesomeIcon icon={faCaretDown} className="fa-caret-down" />
            </div>
        </div>
        <div className='box'>
            <div className="profile-icon-2">
            <FontAwesomeIcon icon={faUser} className="fa-user" />
            </div>
            <select className="dropdown">
            <option>Please select</option>
            </select>
            <div className="arrow-circle">
            <FontAwesomeIcon icon={faCaretDown} className="fa-caret-down" />
            </div>
        </div>
      </div>

      {/* Second row */}
      <div className="row row2">
      <select className="dropdown">
            <option>Please select</option>
        </select>
        <select className="dropdown">
            <option>Please select</option>
        </select>
        <select className="dropdown">
            <option>Please select</option>
        </select>
      </div>

      {/* Third row */}
      <div className="row blue-back">
        <label>PRODUCT</label>
        <label>QTY</label>
        <label>UNIT PRICE</label>
        <label>LINE PRICE</label>
      </div>

      {/* Fourth row */}
      <div className="row">
        <p>Please select product item</p>
      </div>
    </div>
  );
};

export default LeftSection;
