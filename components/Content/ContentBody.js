import PropTypes from "prop-types";
import cx from "classnames";

const ContentBody = ({ isCenter, text }) => {
  let classNames = cx("text--body mt-4", { "text-center": isCenter });

  return <p className={classNames}>{text}</p>;
};

ContentBody.propTypes = {
  isCenter: PropTypes.bool,
  text: PropTypes.string,
};

export default ContentBody;
