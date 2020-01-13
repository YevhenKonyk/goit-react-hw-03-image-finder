import React from 'react';
import PropTypes from 'prop-types';

const ImageGallery = ({ items }) => (
  <main>
    <ul className="ImageGallery">
      {items.map(item => (
        <li key={item.id}>
          <img
            src={item.previewURL}
            alt=""
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </ul>
  </main>
);

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }))
    .isRequired,
};

export default ImageGallery;
