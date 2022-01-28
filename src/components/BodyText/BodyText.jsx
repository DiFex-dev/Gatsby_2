import React from 'react';

import styles from './BodyText.styles';

const BodyText = ({ subtitle, textFirst, textSecond}) => (
  <div css={styles}>
    <h2 className="subtitle">{subtitle}</h2>
    <div className="body-text"/>
      <p>{textFirst}</p>
      <br/>
      <p>{textSecond}</p>
  </div>
);

export default BodyText;
