import React from "react";
import PropTypes from "prop-types";

function ContentBlockLogoGrid({ children }) {
  return (
    <div className='grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-rows-3 md:grid-cols-3 md:gap-4'>
      {children}
    </div>
  );
}

ContentBlockLogoGrid.propTypes = {};

export default ContentBlockLogoGrid;
