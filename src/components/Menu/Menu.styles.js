import { css } from '@emotion/react';

import { colors } from '../../styles';
import { p2r, SecondaryProps } from '../../styles/fonts';

const styles = css`
  position: sticky;
  top: 16px;

  .menu {
    position: relative;
    overflow: hidden;
  }

  .open-button {
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 320px;
    height: ${p2r(64)};
    padding: 0 28px 0 32px;
    ${SecondaryProps};
    font-size: ${p2r(20)};
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    color: ${colors.grayBlack};
    text-transform: uppercase;
    letter-spacing: 0.36px;
    cursor: pointer;
    background-color: ${colors.grayGold};
    border: none;
    border-radius: 32px 32px 0 0;

    &:hover {
      padding: 0 26px 0 30px;
      background-color: ${colors.white};
      border: 2px solid ${colors.grayGold};
    }
  }

  .closed {
    height: ${p2r(64)};

    & > .open-button {
      border-radius: 32px;
    }

    & > .menu-list {
      padding-top: 0;
    }
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    gap: ${p2r(26)};
    width: 320px;
    padding: ${p2r(33)} 40px 0 32px;
    margin: 0;
    list-style: none;
    background-color: ${colors.paleLightGold};
    transition: all 0.2s ease;
  }

  .border {
    padding-bottom: ${p2r(33)};
    border-bottom: 2px solid ${colors.grayGold};
  }

  .menu-item {
    width: 225px;
    ${SecondaryProps};
    font-size: ${p2r(18)};
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    color: ${colors.grayBlack};
    letter-spacing: normal;
    cursor: pointer;

    &:hover {
      color: ${colors.grayGold};
    }
  }

  .menu-article {
    ${SecondaryProps};
    font-style: normal;
    line-height: ${p2r(18)};
    letter-spacing: normal;
  }

  .article-name {
    font-size: ${p2r(18)};
    font-weight: normal;
  }

  .article-info {
    font-size: ${p2r(14)};
    font-weight: 300;
  }

  .smallBtn-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 320px;
    background-color: ${colors.paleLightGold};
    border-radius: 0 0 32px 32px;
  }

  .smallOpen-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: ${p2r(64)};
    margin-top: ${p2r(17)};
    cursor: pointer;
    background-color: ${colors.grayGold};
    border: none;
    border-radius: 32px 0 32px 0;

    &:hover {
      background-color: ${colors.white};
      border: 2px solid ${colors.grayGold};
    }
  }

  .arrow {
    transition: all 0.3s ease;
  }

  .down-arrow {
    transform: rotate(180deg);
  }
`;

export default styles;
