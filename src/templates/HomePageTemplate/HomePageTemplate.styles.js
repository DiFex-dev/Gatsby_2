import { css } from '@emotion/react';

import colors from '../../styles/colors';
import { p2r, PrimaryProps, SecondaryProps } from '../../styles/fonts';

const styles = css`
  .template-container {
    position: relative;
  }

  .mainSection-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: ${p2r(50)};
  }

  .menu-container {
    width: 320px;
    margin-right: 112px;
  }

  .content-container {
    width: 800px;
    margin-right: 210px;
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

  .download-btn {
    margin-top: ${p2r(50)};
  }
`;

export default styles;
