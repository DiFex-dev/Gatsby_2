import React from 'react';

import styles from './DownloadBtn.styles';

const DownloadBtn = ({ data, isDark }) => {
  const { downloadFile, btnText, btnIcon } = data;

  return (
    <div css={styles(isDark)}>
      <a href={downloadFile} className="download-btn" download="">
        <p>{btnText}</p>
        <img src={btnIcon} alt="buttonIcon" />
      </a>
    </div>
  );
};

export default DownloadBtn;
