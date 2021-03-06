import PropTypes from "prop-types";
import cx from "classnames";

const ContentBody = ({ isCenter, text, className }) => {
  let classNames = cx(className,"text--body mt-4", { "text-center": isCenter });

  return <p className={classNames}>{text}</p>;
};

ContentBody.propTypes = {
  isCenter: PropTypes.bool,
  text: PropTypes.string,
};

export default ContentBody;
