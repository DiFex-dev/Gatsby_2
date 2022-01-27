import UtilSocShare from '@economist/fabric-components/utility/utilsocshare/UtilSocShare';
import React from 'react';

import { Wrapper } from '../Wrapper';
import styles from './Hero.style';

const Hero = ({ title, btnText, logo, background, downloadFile, btnIcon }) => {
  const sponsorsList = [
    {
      sponsorLogo: logo,
      sponsorName: 'Desktop Logo',
      sponsorLink: 'https://www.economist.com/',
    },
  ];

  return (
    <div css={styles}>
      <Wrapper maxWidth={'1440px'} width={'100%'} mobileWidth={'90%'}>
        <div className="template-container">
          <div className="hero">
            <div className="title-container">
              <div className="iconSocial">
                <UtilSocShare hasBorder={false} hoverBase={'#B29E71'} hoverIcon={'#f9f8f5'} className="social" />
              </div>
              <h1 className="title" dangerouslySetInnerHTML={{ __html: title }} />
            </div>
            <div className="image">
              <a href={downloadFile} className="download-btn" download="">
                <p dangerouslySetInnerHTML={{ __html: btnText }} />
                <img src={btnIcon} alt="buttonIcon" />
              </a>
              <img src={background} alt="heroImage" />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
