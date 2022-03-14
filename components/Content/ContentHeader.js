import cx from "classnames";
import PropTypes from "prop-types";

const ContentHeader = ({ className = "", title, isUppercase, isCenter }) => {
  let classNames = cx(className, "text--subheadline", {
    ["text-center"]: isCenter,
    ["uppercase"]: isUppercase,
  });

  return <h2 className={classNames}>{title}</h2>;
};

ContentHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  isCenter: PropTypes.bool,
};

export default ContentHeader;
