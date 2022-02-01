import { css } from '@emotion/react';

import { colors } from '../../styles';
import { p2r } from '../../styles/fonts';

const styles = css`
  .cardContent {
    width: 100%;
    height: ${p2r(498)};
    margin-top: ${p2r(128)};
    background-color: ${colors.lightGold};
    box-shadow: inset 0 ${p2r(160)} ${colors.white};
  }

  .cardContent-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    max-width: 1440px;
    padding: ${p2r(0)} 32px;
    margin: 0 auto;
  }

  .cardNav {
    display: flex;
    gap: 40px;
  }

  .cardIndent {
    width: 360px;
  }
`;

export default styles;
