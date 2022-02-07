import { Link } from 'gatsby';
import React from 'react';

import { CardNavigation } from '../CardNavigation';
import styles from './Navigation.styles';

const Navigation = ({ data, mobileArrowFirst, mobileArrowSecond, firstPage, secondPage, thirdPage }) => {
  const { cardPrev, cardNext } = data;
  const { link: linkPrev } = cardPrev;
  const { link: linkNext } = cardNext;
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
                <Link to={linkPrev} className="mobile-btn prev">
                  <img src={mobileArrowFirst} alt="left mob-arrow" />
                  PREV.
                </Link>
                <Link to={linkNext} className="mobile-btn next">
                  NEXT
                  <img src={mobileArrowSecond} alt="right mob-arrow" />
                </Link>
              </div>
              <div className="mobile-pages">
                <Link
                  to="/gold-demand-trends/"
                  className="page-button"
                  dangerouslySetInnerHTML={{ __html: firstPage }}
                />
                <div className="page-delimiter" />
                <Link to="/" className="page-button" dangerouslySetInnerHTML={{ __html: secondPage }} />
                <div className="page-delimiter" />
                <Link
                  to="/gold-market-commentary/"
                  className="page-button"
                  dangerouslySetInnerHTML={{ __html: thirdPage }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
