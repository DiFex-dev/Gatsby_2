import React from 'react';

import styles from './CardNavigation.styles';

const CardNavigation = ({ cardImage, arrow, cardBtnParagraph, cardBtnInfo, direction }) => (
  <div css={styles(direction)}>
    <div className="card">
      <a href="#" className="cardLink">
        <div className="cardImage-container">
          <img src={cardImage} alt="compass" className="cardImage" />
        </div>
        <div className="CardButton">
          <button className="CardButton-text">
            {direction === 'Previous' && <img src={arrow} alt="left arrow" className="arrow" />}
            <p>{direction}</p>
            {direction === 'Next' && <img src={arrow} alt="right arrow" className="arrow" />}
          </button>
          <h3 className="CardButton-paragraph">{cardBtnParagraph}</h3>
          <p className="CardButton-info">{cardBtnInfo}</p>
        </div>
      </a>
    </div>
  </div>
);

export default CardNavigation;
