import React, { useState } from 'react';

import styles from './Menu.styles';

const Menu = ({ data }) => {
  const { btnIcon, btnText, linkTextFirst, linkTextSecond, linkTextThird, articleName, articleInfo } = data;
  const [isOpen, setOpen] = useState(true);

  return (
    <div css={styles}>
      <div className={`menu ${isOpen ? '' : 'closed'}`}>
        <button className="open-button" onClick={() => setOpen(!isOpen)}>
          {btnText}
          <img src={btnIcon} className={`arrow ${isOpen ? '' : 'down-arrow'}`} />
        </button>
        <ul className="menu-list">
          <li className="menu-item">
            <a className="menu-link">{linkTextFirst}</a>
          </li>
          <li className="menu-item">
            <a className="menu-link">{linkTextSecond}</a>
          </li>
          <li className="menu-item border">
            <a className="menu-link">{linkTextThird}</a>
          </li>
        </ul>
        <ul className="menu-list">
          <li className="menu-article">
            <p className="article-name">{articleName}</p>
            <p className="article-info">{articleInfo}</p>
          </li>
          <li className="menu-article">
            <p className="article-name">{articleName}</p>
            <p className="article-info">{articleInfo}</p>
          </li>
          <li className="menu-article">
            <p className="article-name">{articleName}</p>
            <p className="article-info">{articleInfo}</p>
          </li>
          <li className="menu-article">
            <p className="article-name">{articleName}</p>
            <p className="article-info">{articleInfo}</p>
          </li>
          <li className="menu-article">
            <p className="article-name">{articleName}</p>
            <p className="article-info">{articleInfo}</p>
          </li>
          <li className="menu-article">
            <p className="article-name">{articleName}</p>
            <p className="article-info">{articleInfo}</p>
          </li>
          <li className="menu-article">
            <p className="article-name">{articleName}</p>
            <p className="article-info">{articleInfo}</p>
          </li>
          <li className="menu-article">
            <p className="article-name">{articleName}</p>
            <p className="article-info">{articleInfo}</p>
          </li>
          <li className="menu-article">
            <p className="article-name">{articleName}</p>
            <p className="article-info">{articleInfo}</p>
          </li>
          <li className="menu-article">
            <p className="article-name">{articleName}</p>
            <p className="article-info">{articleInfo}</p>
          </li>
        </ul>
        <div className="smallBtn-wrapper">
          <button className="smallOpen-button" onClick={() => setOpen(!isOpen)}>
            <img src={btnIcon} className={`arrow ${isOpen ? '' : 'down-arrow'}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
