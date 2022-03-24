import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import React from "react";

const IsInView = ({ toggleOnce = true, threshold = 0, animateClassNames, children }) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: toggleOnce,
    threshold: threshold,
  });

  return <>{React.cloneElement(children, { ref, inView, entry, animateClassNames })}</>;
};

IsInView.propTypes = {
  toggleOnce: PropTypes.bool,
  threshold: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  animateClassNames: PropTypes.string,
  children: PropTypes.node,
};

export default IsInView;
