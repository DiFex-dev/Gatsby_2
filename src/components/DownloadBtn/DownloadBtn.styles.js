import { css } from '@emotion/react';

import {colors} from '../../styles';
import {p2r} from '../../styles/fonts';

const light = {
  background: 'transparent linear-gradient(16deg, #BB9B66 0, #C6AA71 48%, #E9D793 86%, #D9C184 100%) 0 0 no-repeat',
  hover: `${colors.white}`,
  color: `${colors.grayBlack}`,
  border: `2px solid ${colors.grayGold}`
}

const dark = {
  background: `${colors.black}`,
  hover: `${colors.grayGold}`,
  color: `${colors.white}`,
  border: ''
}

const styles = (isDark) => css`
  .download-btn {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: ${p2r(80)};
    font-family: Univers, sans-serif;
    font-size: ${p2r(18)};
    font-weight: normal;
    color: ${isDark ? dark.color : light.color};
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    background: ${isDark ? dark.background : light.background};
    border-radius: 40px;

    &:hover {
      background: ${isDark ? dark.hover : light.hover};
      border: ${isDark ? dark.border : light.border};
    }
  }
`;

export default styles;
