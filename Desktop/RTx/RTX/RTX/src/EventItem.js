import React from 'react';
import PropTypes from 'prop-types';
import DataItem from './DataItem';

const EventItem = (props) => {
  return (
    <li>
      <strong>{props.frame_id}</strong><br />
      Gdzie: {props.timestamp}<br />
      {/* <DataItem {...props}/> */}
    </li>
  );
};

EventItem.propTypes = {
  frame_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
  //data: PropTypes.object.isRequired
};

export default EventItem;
