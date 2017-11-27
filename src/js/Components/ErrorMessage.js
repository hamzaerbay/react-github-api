import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = props => (
  <div className="error-message">{props.errorMessage}</div>
);

export default ErrorMessage;
