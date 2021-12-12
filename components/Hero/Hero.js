import cx from "classnames";
import PropTypes from "prop-types";

const Hero = ({ className, children }) => {
  let classNames = cx('hero-grid-layout', className);

  return <div className={classNames}>{children}</div>;
};

Hero.proptypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
