import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faUser } from '@fortawesome/free-solid-svg-icons';

import './NavBar.css'; 

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="left-section">
        <FontAwesomeIcon icon={faSun} className="icon" />
        <select className="dropdown">
          <option>Please select</option>
        </select>
        <div className="date-info">
          <p className="dummy-date">01/01/2023 | Monday</p>
        </div>
      </div>
      <div className="center-section">
        <p className="store-name">STOREMATE</p>
      </div>
      <div className="right-section">
        <div className="profile-icons">
        <div className="profile-icon">
            <FontAwesomeIcon icon={faUser} className="fa-user" />
          </div>
          <div className="profile-icon">
            <FontAwesomeIcon icon={faUser} className="fa-user" />
          </div>
          <div className="profile-icon">
            <FontAwesomeIcon icon={faUser} className="fa-user" />
          </div>
          <div className="profile-icon">
            <FontAwesomeIcon icon={faUser} className="fa-user" />
          </div>
        </div>
          <p className="user-name">John Doe</p>
          <div className="profile-icon">
            <FontAwesomeIcon icon={faUser} className="fa-user" />
          </div>
      </div>
    </div>
  );
};

export default NavBar;
