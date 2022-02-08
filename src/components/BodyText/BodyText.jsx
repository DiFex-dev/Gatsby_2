import React from 'react';

import styles from './BodyText.styles';

const BodyText = ({ data }) => {
  const { title, text } = data;
  return (
    <div css={styles}>
      {title && <h2 className="subtitle">{title}</h2>}
      <p className="body-text">{text}</p>
    </div>
  );
};

export default BodyText;
