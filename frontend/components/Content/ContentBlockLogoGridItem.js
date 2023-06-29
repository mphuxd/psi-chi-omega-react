import React from "react";
import PropTypes from "prop-types";
import Image from "next/legacy/image";

function ContentBlockLogoGridItem({ src, alt, width, height }) {
  return (
    <div className='col-span-1 row-span-1'>
      <Image src={src} alt={alt} width={width} height={height} layout='responsive' />
    </div>
  );
}

ContentBlockLogoGridItem.propTypes = {};

export default ContentBlockLogoGridItem;
