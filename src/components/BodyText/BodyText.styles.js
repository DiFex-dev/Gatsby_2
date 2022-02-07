import { css } from '@emotion/react';

import { breakpoints, colors } from '../../styles';
import { p2r, PrimaryProps, SecondaryProps } from '../../styles/fonts';

const style = css`
  @media (max-width: ${breakpoints.smallTablet}px) {
    padding: 0 16px;
  }

  .subtitle {
    margin: ${p2r(50)} 0 ${p2r(30)};
    ${PrimaryProps};
    font-size: ${p2r(32)};
    font-style: normal;
    font-weight: bold;
    line-height: ${p2r(48)};
    color: ${colors.grayBlack};
    text-align: left;
    letter-spacing: normal;

    @media (max-width: ${breakpoints.smallTablet}px) {
      margin: ${p2r(30)} 0 ${p2r(14)};
      font-size: ${p2r(24)};
    }
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

    @media (max-width: ${breakpoints.smallTablet}px) {
      font-size: ${p2r(16)};
    }
  }

  .second {
    margin-top: ${p2r(25)};
  }
`;

export default style;
