import { css } from '@emotion/react';

import {breakpoints} from '../../styles';
import colors from '../../styles/colors';
import { p2r, PrimaryProps, SecondaryProps } from '../../styles/fonts';

const styles = css`
  .template-container {
    position: relative;
  }

  .main-section {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .mainSection-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
    max-width: 1440px;
    margin-top: ${p2r(50)};
    padding: 0 32px;

    @media (max-width: ${breakpoints.smallTablet}px) {
      padding: 0;
      & > .menu-container {
        display: none;
      }
  }
  }

  .menu-container {
    height: 100%;
    padding-right: 102px;
  }

  .content-container {
    max-width: 800px;
  }

  .subtitle {
    margin-top: ${p2r(52)};
    margin-bottom: ${p2r(32)};
    ${PrimaryProps};
    font-size: ${p2r(32)};
    font-style: normal;
    font-weight: bold;
    line-height: ${p2r(48)};
    color: ${colors.grayBlack};
    text-align: left;
    letter-spacing: normal;
  }

  .subtitle-img {
    margin: ${p2r(32)} 0;
  }

  .subtitle-imgGold {
    margin-top: ${p2r(32)};
  }

  .body-text {
    ${SecondaryProps};
    font-size: ${p2r(18)};
    font-style: normal;
    font-weight: 300;
    line-height: ${p2r(26)};
    color: ${colors.grayBlack};
    text-align: left;
    letter-spacing: normal;
  }

  .btn-dark {
    margin-top: ${p2r(50)};

    @media (max-width: ${breakpoints.smallTablet}px) {
      margin-top: ${p2r(50)};
    }
  }
`;

export default styles;
