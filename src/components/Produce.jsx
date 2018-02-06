import React from 'react';
import PropTypes from 'prop-types';

function Produce(props) {
  return (
    <div>
      <h1>{props.month}</h1>
      <ul>
        {props.selection.map(function(selection, i){
          return <li key={i}>{props.selection[i]}</li>;
        })}
      </ul>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array,
};

export default Produce;
