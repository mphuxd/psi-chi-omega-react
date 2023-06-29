import PropTypes from "prop-types";
import Image from "next/legacy/image";
import cx from "classnames";

const CarouselSlideImage = ({ className, src, alt, width, height }) => {
  let classNames = cx("lg:w-1/2 lg:mr-3", className);
  return (
    <div className={classNames}>
      <Image src={src} alt={alt} width={width} height={height} layout='responsive' />
    </div>
  );
};

CarouselSlideImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default CarouselSlideImage;
