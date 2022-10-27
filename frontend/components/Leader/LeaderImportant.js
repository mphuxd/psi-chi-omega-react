import React from "react";
import Image from "next/image";
import { Grid } from "@/components";

function LeaderImportant({ heading, copy, image }) {
  return (
    <Grid
      className='mt-24 md:mt-40 lg:mt-24 2xl:mt-32 gap-y-4 md:gap-y-6 lg:gap-y-6 xl:gap-y-8'
      isCenter={true}
    >
      <h1 className='text--superheadline col-span-full mx-auto text-center'>{heading}</h1>
      <p className='col-span-full lg:col-span-8 lg:col-start-3 text-center'>{copy}</p>
      <div className='col-span-full'>
        <Image
          src={image.url}
          alt={image.alternativeText}
          width={image.width}
          height={image.height}
          layout='responsive'
          priority={true}
        />
      </div>
    </Grid>
  );
}

export default LeaderImportant;
