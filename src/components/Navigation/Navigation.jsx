import React from 'react';

import { CardNavigation } from '../CardNavigation';
import styles from './Navigation.styles';

const Navigation = ({
  cardFirst,
  cardSecond,
  navFirst,
  navSecond,
  cardBtnParagraphPrev,
  cardBtnParagraphNext,
  cardBtnInfoPrev,
  cardBtnInfoNext,
}) => (
  <div css={styles}>
    <div className="cardContent">
      <div className="cardContent-container">
        <div className="cardNav">
          <div className="cardIndent"></div>
          <CardNavigation
            cardImage={cardFirst}
            arrow={navFirst}
            cardBtnParagraph={cardBtnParagraphPrev}
            cardBtnInfo={cardBtnInfoPrev}
            direction={'Previous'}
          />
          <CardNavigation
            cardImage={cardSecond}
            arrow={navSecond}
            cardBtnParagraph={cardBtnParagraphNext}
            cardBtnInfo={cardBtnInfoNext}
            direction={'Next'}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;
