import React, { PropTypes } from 'react';

const CompanyHeading = ({ style, company, title, date, location }) => (
  <div style={{ ...defaultStyles.main, ...style }}>
    <div style={defaultStyles.company}>
      {company}
      <div style={defaultStyles.title}>
        {title}
      </div>
    </div>
    <div style={defaultStyles.locationdate}>
      { date + ' | ' + location }
    </div>
  </div>
);

const defaultStyles = {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '0.75rem'
  },
  company: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'rgba(46, 134, 222, 1)',
    padding: '0.25rem',
  },
  title: {
    display: 'inline-block',
    fontSize: '1rem',
    color: 'rgba(10, 189, 227 , 1)',
    padding: '0.25rem',
    fontWeight: '300',
  },
  locationdate: {
    fontSize: '0.9rem',
    color: 'rgba(84, 160, 255, 0.75)',
    padding: '0.25rem',
  }
};

CompanyHeading.propTypes = {
  style: PropTypes.object.isRequired,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CompanyHeading;
