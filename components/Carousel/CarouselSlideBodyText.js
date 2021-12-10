import PropTypes from "prop-types";

const CarouselSlideBodyText = ({ text }) => {
  return (
    <p className='font-body font-light text-tiny leading-5 mt-2 md:text-lg md:leading-7 '>{text}</p>
  );
};

CarouselSlideBodyText.propType = {
  text: PropTypes.string,
};

export default CarouselSlideBodyText;
