import React from 'react';
import PropTypes from 'prop-types';

const EventItem = (props) => {
  return (
    <li>
      <strong>{props.frame_id}</strong><br />
      Gdzie: {props.timestamp}<br />
      {Object.keys(props.data).map((keyName, i) => (
        <li key={i}>
            <span>{keyName}: {props.data[keyName]}</span>
        </li>
    ))}
    </li>
  );
};

EventItem.propTypes = {
  frame_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default EventItem;
