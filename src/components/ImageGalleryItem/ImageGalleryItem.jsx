import PropTypes from 'prop-types';
import { GalleryItem } from './ImageGalleryItem.styles';

export const ImageGalleryItem = ({ src, largeImageURL, modalBigImg }) => {
  return (
    <GalleryItem
      onClick={() => {
        modalBigImg(largeImageURL);
      }}
    >
      <img src={src} alt="photos"></img>
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  modalBigImg: PropTypes.func.isRequired,
};
