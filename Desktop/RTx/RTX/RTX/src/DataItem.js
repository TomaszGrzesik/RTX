import React from 'react';
import PropTypes from 'prop-types';

const DataItem = (props) => {
  debugger;
  Object.keys(props.data).map((key) => {
    return <td>{key}</td>
 })
};

DataItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default DataItem;
