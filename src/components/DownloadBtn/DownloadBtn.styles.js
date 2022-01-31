import { css } from '@emotion/react';

import {colors} from '../../styles';
import {p2r} from '../../styles/fonts';

const styles = css`
  .download-btn{
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: ${p2r(80)};
    margin-top: ${p2r(50)};
    font-family: Univers, sans-serif;
    font-size: ${p2r(18)};
    font-weight: normal;
    color: ${colors.white};
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    background: ${colors.black};
    border-radius: 40px;
  }
  `;

export default styles;
