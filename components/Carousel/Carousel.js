import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import PropTypes from "prop-types";
import useBreakpointSize from "../../hooks/useBreakpointSize";

const Carousel = ({ children }) => {
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

  return (
    <div className='mt-20 xl:mt-32 2xl:mt-48'>
      <Swiper
        slidesPerView={swiperProps.slidesPerView}
        modules={[Navigation]}
        centeredSlides={true} //set to false and create setTranslate function
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
};

Carousel.propTypes = {
  children: PropTypes.node,
};

export default Carousel;

//mt-10 flex flex-row justify-center xl:items-end xl:justify-self-end xl:justify-items-end

//create a button component and migrate pag buttons
