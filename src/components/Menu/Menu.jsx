import { Link } from 'gatsby';
import React, { useState } from 'react';

import styles from './Menu.styles';

const Menu = ({ data }) => {
  const {
    btnIcon,
    btnText,
    linkTextFirst,
    linkTextSecond,
    linkTextThird,
    linkFirst,
    linkSecond,
    linkThird,
    articleName,
    articleInfo,
  } = data;
  const [isOpen, setOpen] = useState(true);

  return (
    <div css={styles}>
      <div className={`menu ${isOpen ? '' : 'closed'}`}>
        <button className="open-button" onClick={() => setOpen(!isOpen)}>
          {btnText}
          <img src={btnIcon} className={`arrow ${isOpen ? '' : 'down-arrow'}`} />
        </button>
        <div className="scrollingMenu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to={linkFirst} className="menu-link" dangerouslySetInnerHTML={{ __html: linkTextFirst }} />
            </li>
            <li className="menu-item">
              <Link to={linkSecond} className="menu-link" dangerouslySetInnerHTML={{ __html: linkTextSecond }} />
            </li>
            <li className="menu-item border">
              <Link to={linkThird} className="menu-link" dangerouslySetInnerHTML={{ __html: linkTextThird }} />
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
        </div>
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
