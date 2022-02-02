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
    font-size: ${p2r(22)};
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    color: ${colors.grayBlack};
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.36px;
    cursor: pointer;
    background-color: ${colors.grayGold};
    border-radius: 32px 32px 0 0;

    &:hover {
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
    padding: ${p2r(33)} 40px ${p2r(33)} 32px;
    margin: 0;
    list-style: none;
    background-color: ${colors.paleLightGold};
    transition: all 0.2s ease;
  }

  .menu-item {
    ${SecondaryProps};
    font-size: ${p2r(22)};
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    color: ${colors.grayBlack};
    text-align: left;
    letter-spacing: normal;
    cursor: pointer;

    &:hover {
      color: ${colors.grayGold};
    }
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
