import PropTypes from "prop-types";

const CarouselSlideBodyTitle = ({ title }) => {
  return (
    <h3 className='font-body text-2xl font-bold leading-8 mt-2 md:text-5xl md:leading-10'>
      {title}
    </h3>
  );
};

CarouselSlideBodyTitle.propTypes = {
  title: PropTypes.string,
};

export default CarouselSlideBodyTitle;
