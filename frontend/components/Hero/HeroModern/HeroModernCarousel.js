import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/legacy/image";
import useBreakpointSize from "@/hooks/useBreakpointSize";
import "swiper/css";
import "swiper/css/a11y";

function HeroModernCarousel({ images, ariaLabel }) {
  const breakpoint = useBreakpointSize();
  let swiperProps = {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 16,
    effect: "fade",
  };
  switch (breakpoint) {
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
    <Swiper
      tag='section'
      id='hero-image-carousel'
      role='group'
      aria-label={ariaLabel}
      aria-roledescription='carousel'
      tabIndex={0}
      modules={[A11y]}
      spaceBetween={swiperProps.spaceBetween}
      slidesPerView={swiperProps.slidesPerView}
      centeredSlides={swiperProps.centeredSlides}
      className='mt-10 col-span-full max:mt-20 w-full'
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide
            key={index}
            className='hero-slide-width'
            tabIndex={0}
            aria-roledescription='slide'
          >
            <Image
              alt={image.attributes.alternativeText}
              width={image.attributes.width}
              height={image.attributes.height}
              src={image.attributes.url}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

// make appropriate for API

export default HeroModernCarousel;

// Ignore - Ensure aria-roledescription is only used on elements with an implicit or explicit role
// See - https://www.w3.org/WAI/ARIA/apg/patterns/carousel/
