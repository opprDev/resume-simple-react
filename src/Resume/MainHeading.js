import React, { PropTypes } from 'react';

const MainHeading = ({ title }) => (
  <h1 style={style.main}>{title.toUpperCase()}</h1>
);

const style = {
  main: {
    marginBottom: '0.6rem',
    color: 'rgba(46, 134, 222, 1)',
    padding: '0.25rem',
    borderBottom: '1px solid rgba(46, 134, 222, 1)'
  },
};

MainHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainHeading;
