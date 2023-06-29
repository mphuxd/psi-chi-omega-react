import React from "react";
import PropTypes from "prop-types";
import Grid from "../../Grid/Grid";
import Image from "next/legacy/image";

function ContentBlockHistory({
  heading,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageLayout,
  imageMetricList,
  bodyObject,
  priority = false,
}) {
  return (
    <Grid isCenter={true}>
      <h2 className='col-span-full lg:col-span-full inline-block lg:order-1 text--miniheadline mb-4 md:mb-6'>
        {heading}
      </h2>
      <aside className='flex flex-col col-span-full lg:col-start-8 lg:col-span-5 lg:order-3'>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          layout={imageLayout}
          priority={priority}
        />
        {imageMetricList}
      </aside>
      {bodyObject}
    </Grid>
  );
}

ContentBlockHistory.propTypes = {};

export default ContentBlockHistory;
