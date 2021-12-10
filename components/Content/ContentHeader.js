import cx from "classnames";
import PropTypes from "prop-types";

const ContentHeader = ({ className = "", title, isCenter }) => {
  let defaultClassNames = "font-body font-bold text-2xl sm:text-3xl md:text-5xl";
  let classNames = cx(defaultClassNames, className, { "text-center": isCenter });

  return <h2 className={classNames}>{title}</h2>;
};

ContentHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  isCenter: PropTypes.bool,
};

export default ContentHeader;
