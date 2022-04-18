import React from "react";
import PropTypes from "prop-types";

function HistoryMetricList({ children }) {
  return <ol className='text--caption mt-6 space-y-1 lg:space-y-2'>{children}</ol>;
}

HistoryMetricList.propTypes = {};

export default HistoryMetricList;
