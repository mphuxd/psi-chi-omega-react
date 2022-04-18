import cx from "classnames";

const ContentBlockLeftRight = ({ className, left, right }) => {
  let classNames = cx("col-span-full flex flex-col lg:flex-row", className);
  return (
    <div className={classNames}>
      {left}
      {right}
    </div>
  );
};

export default ContentBlockLeftRight;
