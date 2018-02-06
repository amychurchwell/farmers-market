import React from 'react';
import PropTypes from 'prop-types';


function Schedule(props) {
  return (
    <div>
      <h3>{props.location}</h3>
      <h4>{props.day}</h4>
      <h4>{props.hours}</h4>
      <h4>{props.booth}</h4>
    </div>
  );
}

Schedule.propTypes = {
  location: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
};

export default Schedule;
