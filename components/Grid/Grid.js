import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

const Grid = React.forwardRef(
  ({ className = "", isCenter = false, inView, entry, animateClassNames, children }, ref) => {
    let classNames = cx(className, {
      ["theme--grid"]: true,
      ["mx-auto"]: isCenter,
      [animateClassNames]: inView,
    });
    return (
      <div ref={ref} className={classNames}>
        {children}
      </div>
    );
  }
);

Grid.propTypes = {
  children: PropTypes.node,
};

Grid.displayName = "Grid";

export default Grid;
