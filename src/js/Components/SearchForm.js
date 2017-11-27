import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = (props) => {
  const handleSubmit = props.handleSubmit;
  const handleChange = props.handleChange;
  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" className="gh-box__input" onChange={ handleChange } />
      <input type="submit" className="gh-box__btn" value="search" />
    </form>
  );
};
SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default SearchForm;
