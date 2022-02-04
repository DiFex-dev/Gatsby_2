import React from 'react';

import { CardNavigation } from '../CardNavigation';
import styles from './Navigation.styles';

const Navigation = ({ data, mobileArrowFirst, mobileArrowSecond }) => {
  const { cardPrev, cardNext } = data;

  return (
    <div css={styles}>
      <div className="cardContent">
        <div className="cardContent-container">
          <div className="cardIndent" />
          <div className="cardNav-container">
            <div className="cardNav">
              <CardNavigation data={cardPrev} direction={'Previous'} />
              <CardNavigation data={cardNext} direction={'Next'} />
            </div>
            <div className="cardNav-mobile">
              <div className="mobile-allBtn">
                <a className="mobile-btn prev">
                  <img src={mobileArrowFirst} alt="left mob-arrow" />
                  PREV.
                </a>
                <a className="mobile-btn next">
                  NEXT
                  <img src={mobileArrowSecond} alt="right mob-arrow" />
                </a>
              </div>
              <div className="mobile-pages">
                <a className="page-button">1</a>
                <div className="page-delimiter" />
                <a className="page-button">2</a>
                <div className="page-delimiter" />
                <a className="page-button">3</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
