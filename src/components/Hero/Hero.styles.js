import { css } from '@emotion/react';

import { breakpoints } from '../../styles';
import colors from '../../styles/colors';
import { p2r, PrimaryProps } from '../../styles/fonts';

const styles = css`
  @media (max-width: ${breakpoints.smallTablet}px) {
    .wrapper {
      justify-content: normal;
    }
  }

  .template-container {
    position: relative;
  }

  .hero {
    width: 100%;
    max-width: 1440px;
    padding: 0 32px;
    @media (max-width: ${breakpoints.smallTablet}px) {
      padding: 0;
      .title {
        width: 90%;
        margin: 0 0 0 16px;
      }

      .title-icon {
        display: none;
      }

      .mobile {
        display: block;
        margin: 0 0 0 16px;
      }
    }
  }

  .title-container {
    display: flex;
    flex-direction: row;
    margin-top: ${p2r(48)};
  }

  .title-icon {
    display: flex;
    flex: 0 1 340px;
    justify-content: flex-end;
    margin-right: 80px;
  }

  .mobile {
    display: none;
  }

  .title {
    width: 70%;
    margin-top: ${p2r(4)};
    ${PrimaryProps};
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
      left: 0;
      width: 100%;
      max-width: 343px;
    }
  }

  .heroImage {
    width: 100%;
    min-height: ${p2r(450)};
  }
`;

export default styles;
