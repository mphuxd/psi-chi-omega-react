import cx from "classnames";
import PropTypes from "prop-types";
import React from "react";

const Hero = React.forwardRef(({ inView, entry, animateClassNames, className, children }, ref) => {
  let classNames = cx("hero--grid-layout mt-24 md:mt-8", className, {
    "animate__animated animate__fadeIn": inView,
  });
  return (
    <div ref={ref} className={classNames}>
      {children}
    </div>
  );
});

Hero.proptypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Hero.displayName = "Hero";

export default Hero;
