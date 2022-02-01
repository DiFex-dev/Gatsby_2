import { css } from '@emotion/react';

import { colors } from '../../styles';
import { p2r, PrimaryProps, SecondaryProps } from '../../styles/fonts';

const styles = (direction) => css`
  .card {
    width: 380px;
    height: ${p2r(390)};
    cursor: pointer;
    background: ${colors.grayBlack};

    &:hover {
      .cardImage {
        transform: scale(2);
      }

      .CardButton-text {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .cardLink {
    text-decoration: none;
  }

  .cardImage-container {
    max-width: 100%;
    max-height: ${p2r(160)};
    overflow: hidden;
  }

  .cardImage {
    transition: all 0.3s ease;
    transform: scale(1);
  }

  .CardButton {
    display: flex;
    flex-direction: column;
    align-items: ${direction === 'Previous' ? 'flex-end' : 'flex-start'};
    padding: ${p2r(32)} 32px;
    text-align: ${direction === 'Previous' ? 'right' : 'left'};
    cursor: pointer;
  }

  .CardButton-text {
    display: flex;
    flex-direction: row;
    ${SecondaryProps};
    font-size: ${p2r(16)};
    font-style: normal;
    font-weight: normal;
    line-height: ${p2r(36)};
    color: ${colors.white};
    text-transform: uppercase;
    letter-spacing: normal;
    background: none;
    border: none;
  }

  .CardButton-paragraph {
    margin: 0;
    ${PrimaryProps};
    font-size: ${p2r(18)};
    font-style: italic;
    line-height: ${p2r(56)};
    color: ${colors.darkGold};
    letter-spacing: normal;
  }

  .CardButton-info {
    ${SecondaryProps};
    font-size: ${p2r(14)};
    font-style: normal;
    font-weight: 300;
    line-height: ${p2r(26)};
    color: ${colors.white};
    letter-spacing: normal;
  }
`;

export default styles;
