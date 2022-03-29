import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import useBreakpointSize from "../../hooks/useBreakpointSize";
import cx from "classnames";
import { useState } from "react";
import { useSwiper } from 'swiper/react';

const Carousel = React.forwardRef(
  ({ children, inView, entry, className, animateClassNames }, ref) => {
    let [isStart, setIsStart] = useState(true);
    let [isEnd, setIsEnd] = useState(false);
    let breakPoint = useBreakpointSize();
    let swiperProps = {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 16,
      effect: "fade",
    };

    switch (breakPoint) {
      case "default":
        break;
      case "sm":
        swiperProps.spaceBetween = 32;
        break;
      case "md":
        swiperProps.spaceBetween = 16;
        break;
      case "lg" && "xl" && "2xl" && "max":
        swiperProps.spaceBetween = 32;
        break;
    }
    let classNames = cx(
      "mt-20 md:mt-32 hover:cursor-grab active:cursor-grabbing ",
      {
        "animate__animated animate__fadeIn ": inView,
      },
      animateClassNames
    );

    return (
      <div ref={ref} className={classNames}>
        <Swiper
          slidesPerView={swiperProps.slidesPerView}
          modules={[Navigation]}
          centeredSlides={true}
          spaceBetween={swiperProps.spaceBetween}
          navigation={{
            prevEl: ".pag-prev",
            nextEl: ".pag-next",
          }}
        >
          {children}
        </Swiper>

        <div className='theme-grid mx-auto'>
          <div className='mt-10 flex flex-row justify-center col-span-full xl:col-start-11 '>
            <button className='pag-prev mr-2'>
              <Image src='/pag-prev.svg' alt='Move Carousel Back' width={56} height={56} />
            </button>
            <button className='pag-next ml-2'>
              <Image src='/pag-next.svg' alt='Move Carousel Forward' width={56} height={56} />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

Carousel.propTypes = {
  children: PropTypes.node,
};

Carousel.displayName = "Carousel";

export default Carousel;

//mt-10 flex flex-row justify-center xl:items-end xl:justify-self-end xl:justify-items-end

//create a button component and migrate pag buttons
