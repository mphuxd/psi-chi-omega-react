import PropTypes from "prop-types";
import cx from "classnames";
import React from "react";

const Wrapper = ({ className, children, as = "section" }) => {
  let classNames = cx("flex flex-col justify-center", className);

  return React.createElement(as, { className: classNames }, children);
};

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Wrapper;
