import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import PropTypes from "prop-types";

//hook in useBreakpoint to set swiper prop values
const Carousel = ({ children }) => {
  return (
    <div className='mt-20 xl:mt-32 2xl:mt-48'>
      <Swiper
        slidesPerView={"auto"}
        modules={[Navigation]}
        centeredSlides={true} //set to false and create setTranslate function
        spaceBetween={16}
        navigation={{
          prevEl: ".pag-prev",
          nextEl: ".pag-next",
        }}
      >
        {children}
      </Swiper>

      <div className='theme-grid mx-auto'>
        <div className='mt-10 flex flex-row justify-center col-span-2 xl:col-start-11 '>
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
