import UtilSocShare from '@economist/fabric-components/utility/utilsocshare/UtilSocShare';
import React from 'react';

import {DownloadBtn} from '../DownloadBtn';
import { Wrapper } from '../Wrapper';
import styles from './Hero.styles';

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
              <div className="title-icon">
                <UtilSocShare hasBorder={false} hoverBase={'#B29E71'} hoverIcon={'#f9f8f5'} className="social" />
              </div>
              <h1 className="title" dangerouslySetInnerHTML={{ __html: title }} />
            </div>
            <div className="image">
              <DownloadBtn btnText={btnText} downloadFile={downloadFile} btnIcon={btnIcon} isDark={false}/>
              <img src={background} alt="heroImage" />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
