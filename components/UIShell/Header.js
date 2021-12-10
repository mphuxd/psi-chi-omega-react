import cx from "classnames";
import PropTypes from "prop-types";

const Header = ({ isActive, className, children }) => {
  let classNames = cx(className, { fixed: isActive });
  return <header className={classNames}>{children}</header>;
};

Header.propTypes = {
  isActive: PropTypes.bool,
  classNames: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
