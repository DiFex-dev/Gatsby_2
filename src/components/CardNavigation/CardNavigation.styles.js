import { css } from '@emotion/react';

import { colors } from '../../styles';
import { p2r, PrimaryProps, SecondaryProps } from '../../styles/fonts';

const styles = (direction) => css`
  max-width: 100%;
  width: 100%;
  cursor: pointer;
  background: ${colors.grayBlack};
  margin-bottom: ${p2r(107)};

  &:hover {
    .cardImage {
      transform: scale(2);
    }

    .CardButton-text {
      text-decoration: underline;
      cursor: pointer;
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
    display: block;
    max-width: 100%;
    height: ${p2r(160)};
    transition: all 0.3s ease;
    transform: scale(1);
  }

  .CardButton {
    display: flex;
    flex-direction: column;
    align-items: ${direction === 'Previous' ? 'flex-end' : 'flex-start'};
    padding: ${p2r(32)} 32px ${p2r(32)};
    text-align: ${direction === 'Previous' ? 'right' : 'left'};
    cursor: pointer;
  }

  .CardButton-text {
    ${SecondaryProps};
    font-size: ${p2r(16)};
    font-style: normal;
    font-weight: normal;
    color: ${colors.white};
    text-transform: uppercase;
    background: none;
    border: none;
  }

  .arrow {
    max-height: ${p2r(12)};
    margin: 0 12px;
  }

  .CardButton-paragraph {
    margin: ${p2r(34)} 0 ${p2r(16)};
    ${PrimaryProps};
    font-size: ${p2r(18)};
    font-style: italic;
    line-height: ${p2r(26)};
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
