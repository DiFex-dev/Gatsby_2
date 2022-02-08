import React from 'react';

import styles from './Image.styles';

const Image = ({ data }) => {
  const { image, alt } = data;
  return (
    <div css={styles}>
      <img src={image} alt={alt} className="bodyImage" />
    </div>
  );
};

export default Image;
