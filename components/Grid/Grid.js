import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

const Grid = React.forwardRef(
  ({ className = "", inView, entry, animateClassNames, children }, ref) => {
    let classNames = cx("theme--grid", className, animateClassNames, {
      "animate__animated animate__fadeIn": inView,
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
