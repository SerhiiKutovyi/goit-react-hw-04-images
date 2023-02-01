import PropTypes from 'prop-types';
import { Btn } from './Button.stylles';

export const Button = ({ clickLoad }) => {
  return (
    <>
      <Btn type="button" onClick={clickLoad}>
        Load more
      </Btn>
    </>
  );
};

Button.propTypes = {
  clickLoad: PropTypes.func.isRequired,
};
