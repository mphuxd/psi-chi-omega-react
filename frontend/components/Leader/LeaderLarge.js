import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Wrapper } from "../Wrapper";
import { Grid } from "../Grid";

function LeaderLarge({
  heading,
  largeCopy,
  copy1,
  copy2,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  priority = true,
}) {
  return (
    <Wrapper className='justify-center mt-24 md:mt-40 lg:mt-24 2xl:mt-32'>
      <Grid className='mx-auto'>
        <h1 className='col-span-full text--headline xl:col-span-9'>{heading}</h1>
        <p className='col-span-full lg:col-span-9 md:text-3xl md:leading-9 lg:text-2xl lg:leading-8 mt-4 md:mt-8 text-base font-medium tracking-[3%] lg:font-medium'>
          {largeCopy}
        </p>
        <section className='col-span-full gap-x-8 flex flex-col lg:flex-row xl:mt-10 mt-4 md:mt-8'>
          <div className='text-tiny md:text-lg md:leading-7 lg:text-base lg:leading-6 leading-5 lg:w-1/2'>
            <p>{copy1}</p>
            { copy2 && <p className='mt-4'>{copy2}</p>}
          </div>
          <div className='mt-6 lg:mt-0 lg:w-1/2'>
            <Image
              src={imageSrc}
              width={imageWidth}
              height={imageHeight}
              priority={priority}
              alt={imageAlt}
              layout='responsive'
              sizes={100}
            />
          </div>
        </section>
      </Grid>
    </Wrapper>
  );
}
LeaderLarge.propTypes = {};

export default LeaderLarge;
