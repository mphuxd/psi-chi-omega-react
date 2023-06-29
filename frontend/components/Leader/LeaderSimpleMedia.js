import React from "react";
import PropTypes from "prop-types";
import LeaderSimple from "./LeaderSimple";
import Image from "next/legacy/image";

function LeaderSimpleMedia({
  heading,
  body,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageLayout = "responsive",
  isUppercase = false,
}) {
  return (
    <LeaderSimple heading={heading} body={body} upperCase={isUppercase}>
      <div className='mt-4 md:mt-6 lg:mt-8 col-span-full'>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          layout={imageLayout}
          priority={true}
        />
      </div>
    </LeaderSimple>
  );
}

LeaderSimpleMedia.propTypes = {};

export default LeaderSimpleMedia;
