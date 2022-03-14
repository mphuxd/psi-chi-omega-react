import React from "react";
import cx from "classnames";

const ContentBlockLinkFeed = ({ className, children }) => {
  let classNames = cx('flex flex-col col-span-full');
  return (
    <div className={classNames}>
      <h3 className='uppercase text--subheadline mb-4 md:mb-16'>Related Topics</h3>
      {children}
    </div>
  );
};

export default ContentBlockLinkFeed;
