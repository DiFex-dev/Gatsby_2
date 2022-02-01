import FadeIn from '@economist/fabric-components/animation/FadeIn/FadeIn';
import SlideIn from '@economist/fabric-components/animation/SlideIn/SlideIn';
import React from 'react';

import styles from './Quote.styles';

const Quote = () => (
  <div css={styles}>
    <div className="quote">
      <SlideIn triggerOnce={true} translateY="0px" translateX="100px">
        <div className="quoteIcon">“</div>
      </SlideIn>
      <FadeIn triggerOnce={true} duration={'.5s'}>
        <div className="quote-wrapper">
          <p className="quoteText">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.
          </p>
          <p className="quoteAuthor">
            Author name
            <br />
            Designation, Company name
          </p>
        </div>
      </FadeIn>
    </div>
  </div>
);

export default Quote;
