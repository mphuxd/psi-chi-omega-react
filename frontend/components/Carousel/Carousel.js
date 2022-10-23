import React, { useState } from "react";
import { Swiper } from "swiper/react";
import { Navigation, A11y } from "swiper";
import CarouselPagNext from "./CarouselPagNext";
import CarouselPagPrev from "./CarouselPagPrev";
import useBreakpointSize from "../../hooks/useBreakpointSize";
import cx from "classnames";
import PropTypes from "prop-types";

const Carousel = React.forwardRef(
  ({ children, inView, entry, className, ariaLabel, animateClassNames }, ref) => {
    let [isStart, setIsStart] = useState(true);
    let [isEnd, setIsEnd] = useState(false);
    let breakPoint = useBreakpointSize();
    let swiperProps = {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 16,
      effect: "fade",
    };

    function handleChange() {
      isEnd = false;
      isStart = false;

      if (this.isEnd) {
        isEnd = true;
      }
      if (this.isBeginning) {
        isStart = true;
      }

      setIsEnd(isEnd);
      setIsStart(isStart);
    }

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
      <div
        role='group'
        aria-label={ariaLabel}
        aria-roledescription='carousel'
        ref={ref}
        className={classNames}
      >
        <Swiper
          tabIndex={0}
          slidesPerView={swiperProps.slidesPerView}
          modules={[Navigation, A11y]}
          centeredSlides={true}
          spaceBetween={swiperProps.spaceBetween}
          navigation={{
            prevEl: ".pag-prev",
            nextEl: ".pag-next",
          }}
          onActiveIndexChange={handleChange}
        >
          {children}
        </Swiper>
        <div className='theme-grid mx-auto'>
          <div className='mt-10 flex flex-row justify-center col-span-full xl:col-start-11 '>
            <CarouselPagPrev isStart={isStart} />
            <CarouselPagNext isEnd={isEnd} />
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
