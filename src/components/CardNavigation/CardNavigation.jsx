import { Link } from 'gatsby';
import React from 'react';

import styles from './CardNavigation.styles';

const CardNavigation = ({ data, direction }) => {
  const { image, arrow, title, description, link } = data;

  return (
    <div css={styles(direction)}>
      <Link to={link} className="cardLink">
        <div className="cardImage-container">
          <img src={image} alt="compass" className="cardImage" />
        </div>
        <div className="CardButton">
          <button className="CardButton-text">
            {direction === 'Previous' && <img src={arrow} alt="left arrow" className="arrow" />}
            {direction}
            {direction === 'Next' && <img src={arrow} alt="right arrow" className="arrow" />}
          </button>
          <h3 className="CardButton-paragraph">{title}</h3>
          <p className="CardButton-info">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardNavigation;
