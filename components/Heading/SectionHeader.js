import PropTypes from "prop-types";
import cx from "classnames";

const SectionHeader = ({ className, children }) => {
  let classNames = cx(className, "flex flex-col col-span-full lg:col-span-8 lg:col-start-3");
  return <div className={classNames}>{children}</div>;
};

SectionHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SectionHeader;
