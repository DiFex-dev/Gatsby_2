import { css } from '@emotion/react';

import colors from '../../styles/colors';
import { p2r } from '../../styles/fonts';

const styles = css`
  .template-container {
    position: relative;
  }

  .title-container {
    display: flex;
    flex-direction: row;
    margin-top: ${p2r(48)};
    margin-left: 340px;
  }

  .title-icon {
    margin-right: 80px;
  }

  .title {
    margin-top: ${p2r(4)};
    font-family: Lexia;
    font-size: ${p2r(42)};
    font-style: italic;
    line-height: ${p2r(56)};
    color: ${colors.paleGold};
    letter-spacing: normal;
  }

  .download-btn {
    position: relative;
    top: ${p2r(40)};
    left: 432px;
  }
`;

export default styles;
