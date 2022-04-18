import PropTypes from "prop-types";
import cx from "classnames";
import CarouselSlideImage from "./CarouselSlideImage";
import CarouselSlideBodyTitle from "./CarouselSlideBodyTitle";
import CarouselSlideBody from "./CarouselSlideBody";
import CarouselSlideBodyText from "./CarouselSlideBodyText";
import LinkButton from "../Link/LinkButton";

const CarouselSlideContainer = ({
  src,
  alt,
  width,
  height,
  heading,
  copy,
  href,
  linkAlt,
  label,
  isActive,
}) => {
  let classNames = cx("lg:flex lg:flex-row", {
    "opacity-100 ": isActive,
    "opacity-25  ": !isActive,
  });
  return (
    <div className={classNames}>
      <CarouselSlideImage src={src} alt={alt} width={width} height={height} />
      <CarouselSlideBody>
        <CarouselSlideBodyTitle title={heading} />
        <CarouselSlideBodyText text={copy} />
        <LinkButton className='mt-10' href={href} alt={linkAlt} label={label} isCenter={false} />
      </CarouselSlideBody>
    </div>
  );
};

CarouselSlideContainer.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
};

export default CarouselSlideContainer;
