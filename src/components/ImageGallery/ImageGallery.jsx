import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styles';

export const ImageGallery = ({ articles, modalBigImg }) => {
  return (
    <>
      <Gallery>
        {articles.map(({ webformatURL, id, tegs, largeImageURL }) => {
          return (
            <ImageGalleryItem
              src={webformatURL}
              alt={tegs}
              key={id}
              modalBigImg={modalBigImg}
              largeImageURL={largeImageURL}
            />
          );
        })}
      </Gallery>
    </>
  );
};

ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  modalBigImg: PropTypes.func.isRequired,
};
