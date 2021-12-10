import PropTypes from "prop-types";

const CarouselSlideBody = ({ children }) => {
  return <div className='lg:w-1/2 lg:ml-3 xl:mt-auto mb-auto max:pr-5'>{children}</div>;
};

CarouselSlideBody.propTypes = {
  children: PropTypes.node,
};

export default CarouselSlideBody;
