import PropTypes from "prop-types";

const CarouselSlideBodyText = ({ text }) => {
  return <p className='text--body mt-2'>{text}</p>;
};

CarouselSlideBodyText.propType = {
  text: PropTypes.string,
};

export default CarouselSlideBodyText;
