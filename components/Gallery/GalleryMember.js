import React from "react";
import PropTypes from "prop-types";

function GalleryMember({ memberName, memberClass }) {
  return (
    <div className='px-4 col-span-2 sm:col-span-4 md:col-span-4 lg:col-span-3 flex flex-col'>
      <span className='text--miniheadline md:font-medium'>{memberName}</span>
      <span className='text--caption pt-2'>{memberClass}</span>
    </div>
  );
}

GalleryMember.propTypes = {};

export default GalleryMember;
