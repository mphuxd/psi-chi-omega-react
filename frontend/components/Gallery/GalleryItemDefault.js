import React from "react";
import Image from "next/legacy/image";

function GalleryItemDefault({ src, alt, width, height, layout }) {
  return (
    <figure className='col-span-full sm:col-span-4 md:col-span-6 lg:col-span-3 lg:row-span-3 relative'>
      <Image src={src} alt={alt} width={width} height={height} layout={layout} />
    </figure>
  );
}

export default GalleryItemDefault;
