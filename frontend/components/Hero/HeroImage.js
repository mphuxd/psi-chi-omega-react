import cx from "classnames";
import Image from "next/legacy/image";
import PropTypes from "prop-types";

const HeroImage = ({ className, src, alt, width, height }) => {
  let classNames = cx("col-span-full -mx-4 mt-5 md:mx-0 md:mt-8 xl:mt-12", className);
  return (
    <div className={classNames}>
      <Image src={src} alt={alt} width={width} height={height} layout="responsive" priority />
    </div>
  );
};

HeroImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default HeroImage;
