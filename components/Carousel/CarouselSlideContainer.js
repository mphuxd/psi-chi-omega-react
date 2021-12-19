import PropTypes from "prop-types";
import cx from "classnames";

const CarouselSlideContainer = ({ children, isActive }) => {
  let classNames = cx("lg:flex lg:flex-row", {
    "opacity-100 ": isActive,
    "opacity-25  ": !isActive,
  });
  return <div className={classNames}>{children}</div>;
};

CarouselSlideContainer.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
};

export default CarouselSlideContainer;
