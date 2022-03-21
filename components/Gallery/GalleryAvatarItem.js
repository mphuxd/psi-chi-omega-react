import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function GalleryAvatarItem({
  avatarName,
  avatarTitle,
  avatarClass,
  imageSrc,
  imageAlt,
  imageWidth = 96,
  imageHeight = 96,
  imageLayout = "responsive",
}) {
  return (
    <div className='px-4 col-span-full items-center sm:col-span-4 md:col-span-6 lg:col-span-4 lg:row-span-1 flex flex-row gap-x-8'>
      <div className='basis-1/4 sm:basis-1/3'>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          layout={imageLayout}
        />
      </div>
      <div className='flex flex-col basis-3/4 sm:basis-2/3'>
        <span className="text--miniheadline">{avatarName}</span>
        <span className="text--body pt-1">{avatarTitle}</span>
        <span className="text--caption pt-2">{avatarClass}</span>
      </div>
    </div>
  );
}

GalleryAvatarItem.propTypes = {};

export default GalleryAvatarItem;
