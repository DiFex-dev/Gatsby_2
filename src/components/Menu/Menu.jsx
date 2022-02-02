import React, { useState } from 'react';

import styles from './Menu.styles';

const Menu = ({ menuIcon }) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <div css={styles}>
      <div className={`menu ${isOpen ? '' : 'closed'}`}>
        <button className="open-button" onClick={() => setOpen(!isOpen)}>
          Articles index
          <img src={menuIcon} className={`arrow ${isOpen ? '' : 'down-arrow'}`} />
        </button>
        <ul className="menu-list">
          <li className="menu-item">
            <a className="menu-link">Gold mid-year outlook 2021</a>
          </li>
          <li className="menu-item">
            <a className="menu-link">Gold Demand Trends Q2 2021</a>
          </li>
          <li className="menu-item">
            <a className="menu-link">Gold Market Commentary</a>
          </li>
        </ul>
        <div className="smallBtn-wrapper">
          <button className="smallOpen-button" onClick={() => setOpen(!isOpen)}>
            <img src={menuIcon} className="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
