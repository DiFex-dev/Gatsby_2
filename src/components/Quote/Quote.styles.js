import { css } from '@emotion/react';

import { colors } from '../../styles';
import { p2r, PrimaryProps, SecondaryProps } from '../../styles/fonts';

const styles = css`
  .quote {
    width: 100%;
    margin: ${p2r(87)} 0 ${p2r(33)};
  }

  .quoteIcon {
    position: absolute;
    top: ${p2r(-54)};
    left: 32px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 108px;
    height: ${p2r(108)};
    ${PrimaryProps};
    font-size: ${p2r(100)};
    font-style: normal;
    font-weight: normal;
    line-height: ${p2r(64)};
    color: ${colors.grayBlack};
    letter-spacing: normal;
    background-color: ${colors.grayGold};
    border-radius: 54px;
  }

  .quote-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: ${p2r(30)} 30px;
    background: ${colors.paleLightGold};
  }

  .quoteText {
    margin: ${p2r(57)} 0 ${p2r(32)};
    ${PrimaryProps};
    font-size: ${p2r(20)};
    font-style: normal;
    font-weight: normal;
    line-height: ${p2r(32)};
    color: ${colors.grayBlack};
    text-align: left;
    letter-spacing: normal;
  }

  .quoteAuthor {
    ${SecondaryProps};
    font-size: ${p2r(16)};
    font-style: normal;
    font-weight: bold;
    line-height: ${p2r(26)};
    color: ${colors.grayBlack};
    text-align: left;
    letter-spacing: normal;
  }
`;

export default styles;
