import React from 'react';

import styles from './CardNavigation.styles';

const CardNavigation = ({ cardImage, arrow, cardBtnText, cardBtnParagraph, cardBtnInfo, direction }) => (
  <div css={styles(direction)}>
    <div className="card">
      <a href="#" className="cardLink">
        <div className="cardImage-container">
          <img src={cardImage} alt="compass" className="cardImage" />
        </div>
        <div className="CardButton">
          <button className="CardButton-text">
            <img src={arrow} alt="left arrow" className="arrow" />
            {cardBtnText}
          </button>
          <h3 className="CardButton-paragraph">{cardBtnParagraph}</h3>
          <p className="CardButton-info">{cardBtnInfo}</p>
        </div>
      </a>
    </div>
  </div>
);

export default CardNavigation;
