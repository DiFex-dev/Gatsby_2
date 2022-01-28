import React from 'react';

import styles from './Image.styles';

const Image = ({ image, alt}) => (
  <div css={styles}>
     <img src={image} alt={alt} className="bodyImage"/>
  </div>
);

export default Image;
