import React from 'react';
import PropTypes from 'prop-types';
import Router from './router';


const Structure = () => {

  return (
    (<Router/>)
  );
};

Structure.propTypes = {
  example: PropTypes.string,
};

Structure.defaultProps = {
  example: 'this is a test',
};

export default Structure;