import { css } from '@emotion/react';

import colors from '../../styles/colors';
import { p2r } from '../../styles/fonts';
import { breakpoints } from '../../styles';

const styles = css`
  .template-container {
    position: relative;
  }

  .hero {
    width: 100%;
    max-width: 1440px;
    padding: 0 32px;
  }

  .title-container {
    display: flex;
    flex-direction: row;
    margin-top: ${p2r(48)};
  }

  .title-icon {
    display: flex;
    justify-content: flex-end;
    flex: 0 1 340px;
    margin-right: 80px;
  }

  .title {
    margin-top: ${p2r(4)};
    width: 70%;
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
    left: 340px;

    @media (max-width: ${breakpoints.smallTablet}px) {
      width: 100%;
      max-width: 343px;
      left: 0;
    }
  }

  .heroImage {
    width: 100%;
    min-height: ${p2r(450)};
  }
`;

export default styles;
