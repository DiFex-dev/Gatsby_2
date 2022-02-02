import FadeIn from '@economist/fabric-components/animation/FadeIn/FadeIn';
import SlideIn from '@economist/fabric-components/animation/SlideIn/SlideIn';
import React from 'react';

import styles from './Quote.styles';

const Quote = ({ quoteText, quoteAuthor }) => (
  <div css={styles}>
    <div className="quote">
      <SlideIn triggerOnce={true} translateY="0px" translateX="100px">
        <div className="quoteIcon">“</div>
      </SlideIn>
      <div className="quote-wrapper">
        <FadeIn triggerOnce={true} duration={'.5s'}>
          <p className="quoteText">{quoteText}</p>
          <p className="quoteAuthor" dangerouslySetInnerHTML={{ __html: quoteAuthor }} />
        </FadeIn>
      </div>
    </div>
  </div>
);

export default Quote;
