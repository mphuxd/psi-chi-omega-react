import React from "react";
import PropTypes from "prop-types";

function HistoryBody({ children }) {
  return (
    <div className='mt-6 sm:mt-8 max-w-xl lg:mt-0 col-span-full lg:col-span-6 lg:order-2 space-y-6 text--body'>{children}</div>
  );
}

HistoryBody.propTypes = {};

export default HistoryBody;
