import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Search } from './Searchbar.styles';

export const Searchbar = ({ onSubmitHandler }) => {
  const [inputValue, setInputValue] = useState('');

  const handelChange = eve => {
    setInputValue(eve.target.value);
  };

  const handleSubmit = eve => {
    eve.preventDefault();
    if (inputValue.trim() === '') {
      toast.error('Fill in the search bar!');
      return;
    }
    onSubmitHandler(inputValue);

    setInputValue('');
  };

  return (
    <>
      <Search>
        <form onSubmit={handleSubmit}>
          <button type="submit">
            <span>{<FcSearch />}</span>
          </button>

          <input
            value={inputValue}
            onChange={handelChange}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </Search>
    </>
  );
};

Searchbar.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};
