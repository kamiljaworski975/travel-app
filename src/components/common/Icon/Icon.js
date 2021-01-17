import React from 'react';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/js/all';

const Icon = (props) => <i className={`fas fa-${props.name}`}></i>;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
