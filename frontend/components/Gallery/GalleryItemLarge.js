import React from "react";
import Image from "next/legacy/image";

function GalleryItemLarge({ src, alt, width, height, layout }) {
  return (
    <figure className='col-span-full sm:col-span-4 md:col-span-6 lg:col-span-6 lg:row-span-6 relative w-full h-full'>
      <Image src={src} alt={alt} width={width} height={height} layout={layout} />
    </figure>
  );
}

export default GalleryItemLarge;
