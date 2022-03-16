import React from "react";
import PropTypes from "prop-types";

function HistoryMetricListItem({label, metric}) {
  return (
    <li className='flex flex-row justify-between relative'>
      <span className='pr-2 md:pr-4'>{label}</span>
      <span className='grow divider relative'></span>
      <span className='pl-2 md:pl-4'>{metric}</span>
    </li>
  );
}

HistoryMetricListItem.propTypes = {};

export default HistoryMetricListItem;
