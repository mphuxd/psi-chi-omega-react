import cx from "classnames";
import PropTypes from "prop-types";

const ContentHeader = ({ className = "", title, isCenter }) => {
  let classNames = cx("text--subheadline", className, { "text-center": isCenter });

  return <h2 className={classNames}>{title}</h2>;
};

ContentHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  isCenter: PropTypes.bool,
};

export default ContentHeader;
