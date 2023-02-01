import PropTypes from 'prop-types';
import { Overlay } from './Modal.styles';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#moda-root');

export const Modal = ({ src, close }) => {
  useEffect(() => {
    const handleClose = eve => {
      if (eve.code === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [close]);

  const closeModal = eve => {
    if (eve.currentTarget === eve.target) {
      close();
    }
  };

  return createPortal(
    <Overlay onClick={closeModal}>
      <div>
        <img src={src.largeImageURL} alt="photos" />
      </div>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  src: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};
