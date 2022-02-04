import { css } from '@emotion/react';

import { breakpoints, colors } from '../../styles';
import { p2r, SecondaryProps } from '../../styles/fonts';

const styles = css`
  .cardContent {
    width: 100%;
    margin-top: ${p2r(128)};
    background-color: ${colors.lightGold};
    box-shadow: inset 0 ${p2r(160)} ${colors.white};

    @media (max-width: ${breakpoints.smallTablet}px) {
      margin-top: ${p2r(64)};
      background-color: ${colors.white};
      box-shadow: none;
    }
  }

  .cardContent-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
    max-width: 1440px;
    padding: ${p2r(0)} 32px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.smallTablet}px) {
      justify-content: center;
    }
  }

  .cardNav-container {
    max-width: 800px;

    @media (max-width: ${breakpoints.smallTablet}px) {
      width: 100%;
      max-width: 343px;
      margin: 0 auto;
    }
  }

  .cardNav {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    width: 100%;

    @media (max-width: ${breakpoints.smallTablet}px) {
      display: none;
    }
  }

  .cardIndent {
    min-width: 320px;
    padding-right: 420px;

    @media (max-width: ${breakpoints.smallTablet}px) {
      display: none;
    }
  }

  .cardNav-mobile {
    width: 100%;

    @media (min-width: ${breakpoints.smallTablet + 1}px) {
      display: none;
    }
  }

  .mobile-allBtn {
    display: flex;

    justify-content: space-between;
    width: 100%;
  }

  .mobile-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 138px;
    height: ${p2r(64)};
    border-radius: 40px;
    background-color: ${colors.grayGold};
    ${SecondaryProps};
    font-size: ${p2r(18)};
    letter-spacing: 0.36px;
  }

  .prev {
    padding-right: 32px;
    padding-left: 15px;
  }

  .next {
    padding-right: 15px;
    padding-left: 32px;
  }

  .mobile-pages {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: ${p2r(64)} 0 ${p2r(80)};
  }

  .page-button {
    color: ${colors.paleBlack};
    ${SecondaryProps};
    font-size: ${p2r(18)};
    font-weight: 300;
  }

  .page-delimiter {
    width: 1px;
    height: ${p2r(24)};
    background-color: ${colors.paleBlack};
  }
`;

export default styles;
