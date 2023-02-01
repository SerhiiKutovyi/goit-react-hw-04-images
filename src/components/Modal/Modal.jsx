import PropTypes from 'prop-types';
import { Overlay } from './Modal.styles';

export const Modal = ({ src, close }) => {
  return (
    <Overlay onClick={close}>
      <div>
        <img src={src.largeImageURL} alt="photos" />
      </div>
    </Overlay>
  );
};

Modal.propTypes = {
  src: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};
