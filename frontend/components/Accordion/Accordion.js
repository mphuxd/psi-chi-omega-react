import React from "react";
import cx from "classnames";

const Accordion = ({ children, className }) => {
  let classNames = cx(className);
  return <ol className={classNames}>{children}</ol>;
};

export default Accordion;
