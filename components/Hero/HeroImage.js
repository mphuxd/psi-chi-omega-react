import cx from "classnames";
import Image from "next/image";
import PropTypes from "prop-types";

const HeroImage = ({ className, src, alt, width, height }) => {
  let classNames = cx("mt-7 col-span-full", className);
  return (
    <div className={classNames}>
      <Image src={src} alt={alt} width={width} height={height} priority />
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
