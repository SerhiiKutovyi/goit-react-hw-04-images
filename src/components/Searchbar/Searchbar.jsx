import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import React, { Component } from 'react';
import { Search } from './Searchbar.styles';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handelChange = eve => {
    this.setState({ inputValue: eve.target.value });
  };

  handleSubmit = eve => {
    eve.preventDefault();
    if (this.state.inputValue.trim() === '') {
      toast.error('Fill in the search bar!');
      return;
    }
    this.props.onSubmitHandler(this.state.inputValue);

    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <>
        <Search>
          <form onSubmit={this.handleSubmit}>
            <button type="submit">
              <span>{<FcSearch />}</span>
            </button>

            <input
              value={this.state.inputValue}
              onChange={this.handelChange}
              type="text"
              placeholder="Search images and photos"
            />
          </form>
        </Search>
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};
