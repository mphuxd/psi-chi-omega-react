import cx from "classnames";
import PropTypes from "prop-types";

const Grid = ({ className = "", children }) => {
  let classNames = cx("theme--grid", className);
  return <div className={classNames}>{children}</div>;
};

Grid.propTypes = {
  children: PropTypes.node,
};

export default Grid;
