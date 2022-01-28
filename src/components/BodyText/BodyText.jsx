import React from 'react';

import styles from './BodyText.styles';

const BodyText = ({ subtitle, textFirst, textSecond}) => (
  <div css={styles}>
    {subtitle && <h2 className="subtitle">{subtitle}</h2>}
      <p className="body-text">{textFirst}</p>
      {textSecond && <p className="body-text second">{textSecond}</p>}
  </div>
);

export default BodyText;
