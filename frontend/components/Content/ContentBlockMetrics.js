import cx from "classnames";
import propTypes from "prop-types";
import ContentBlockMetricItem from "./ContentBlockMetricItem";

const ContentBlockMetrics = ({ className, children }) => {
  let classNames = cx(className, "lg:my-auto xl:my-0");
  return <div className={classNames}>{children}</div>;
};

export default ContentBlockMetrics;
