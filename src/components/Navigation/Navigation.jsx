import React from 'react';

import { CardNavigation } from '../CardNavigation';
import styles from './Navigation.styles';

const Navigation = ({ data }) => {
  const { cardPrev, cardNext } = data;

  return (
    <div css={styles}>
      <div className="cardContent">
        <div className="cardContent-container">
          <div className="cardNav">
            <div className="cardIndent" />
            <CardNavigation data={cardPrev} direction={'Previous'} />
            <CardNavigation data={cardNext} direction={'Next'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
