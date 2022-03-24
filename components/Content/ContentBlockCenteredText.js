import React from "react";
import PropTypes from "prop-types";

function ContentBlockCenteredText({ heading, body }) {
  return (
    <div className='col-span-full theme--grid_inner'>
      <h2 className='col-span-3 text--minorheadline'>{heading}</h2>
      <div className='col-span-7 text--body text--body space-y-6 mt-2 md:mt-4 lg:mt-0 max-w-3xl'>
        {body}
      </div>
    </div>
  );
}

ContentBlockCenteredText.propTypes = {};

export default ContentBlockCenteredText;
