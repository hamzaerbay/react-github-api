import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = (props) => {
  const handleSubmit = props.handleSubmit;
  const handleChange = props.handleChange;
  return (
    <form onSubmit={ handleSubmit } className="search-form">
      <input type="text" className="search-form__input" onChange={ handleChange } placeholder="Github Username" />
      <button onClick={ handleSubmit } className="search-form__btn" value="search">
        <i className="fa fa-search" aria-hidden="true" />
      </button>
    </form>
  );
};
SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default SearchForm;
