import React from 'react';

import './gallery-image.styles.scss';

const GalleryImage = ({ imageUrl, index }) => {
  return (
    <div
      className='gallery-image'
      id={`image-${index}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default GalleryImage;
