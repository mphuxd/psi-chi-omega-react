import cx from "classnames";

const ContentBlockMedia = ({ noPaddingMobile, className, children }) => {
  let classNames = cx(className, { ["-mx-2 sm:mx-0"]: noPaddingMobile });
  return <div className={classNames}>{children}</div>;
};

export default ContentBlockMedia;
