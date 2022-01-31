import React from 'react';

import styles from './DownloadBtn.styles'

const DownloadBtn = ({ downloadFile, btnText, btnIcon }) => (
  <div css={styles}>
    <a href={downloadFile} className="download-btn" download="">
      <p>{btnText}</p>
      <img src={btnIcon} alt="buttonIcon" />
    </a>
  </div>
);


export default DownloadBtn;
