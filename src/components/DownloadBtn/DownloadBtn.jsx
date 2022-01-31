import React from 'react';

import styles from './DownloadBtn.styles'

const DownloadBtn = ({ downloadFile, btnText, btnIcon, propsDark }) => (
  <div css={styles(propsDark)}>
    <a href={downloadFile} className="download-btn" download="">
      <p>{btnText}</p>
      <img src={btnIcon} alt="buttonIcon" />
    </a>
  </div>
);


export default DownloadBtn;
