import {css} from '@emotion/react'

import {colors} from '../../styles';
import {p2r, PrimaryProps, SecondaryProps} from '../../styles/fonts';

const style = css`
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

  .second {
    margin-top: ${p2r(30)};
  }
`;

export default style;
