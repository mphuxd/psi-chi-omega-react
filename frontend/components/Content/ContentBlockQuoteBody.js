import PropTypes from "prop-types";
import cx from "classnames";

const ContentBlockQuoteBody = ({ className, children }) => {
  let classNames = cx(className);

  return <div className={classNames}>{children}</div>;
};

ContentBlockQuoteBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ContentBlockQuoteBody;
