import PropTypes from "prop-types";

const CarouselSlideBodyTitle = ({ title }) => {
  return (
    <h2 id={title.replaceAll(" ", "-")} className='mt-2 text--subheadline'>
      {title}
    </h2>
  );
};

CarouselSlideBodyTitle.propTypes = {
  title: PropTypes.string,
};

export default CarouselSlideBodyTitle;
