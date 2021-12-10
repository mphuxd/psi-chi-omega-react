import cx from "classnames";
import PropTypes from "prop-types";

const Hero = ({ className, children }) => {
  let defaultClassNames =
    "object-center flex flex-col justify-center w-screen mt-9 md:pr-6 md:pl-6 lg:pl-12 lg:pr-12 xl:pl-20 xl:pr-20 2xl:pl-28 2xl:pr-28 2xl:mr-auto 2xl:ml-auto max:pl-0 max:pr-0 max:max-w-1440";
  let classNames = cx(defaultClassNames, className);

  return <div className={classNames}>{children}</div>;
};

Hero.proptypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
