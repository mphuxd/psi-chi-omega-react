import PropTypes from "prop-types";
import cx from "classnames";

const Wrapper = ({ className, children }) => {
  let classNames = cx("flex flex-col justify-center", className);
  return <section className={classNames}>{children}</section>;
};

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Wrapper;
