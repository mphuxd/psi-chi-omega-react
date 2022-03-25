import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

function HeaderSidepanelBackdrop({ isActive }) {
  let classNames = cx({
    ["backdrop-blur-sm bg-midnight bg-opacity-30 absolute w-screen h-screen min-h-screen w-screen -ml-2 sm:-ml-4 overflow-x-hidden"]: true,
    ["block"]: isActive,
    ["hidden"]: !isActive,
  });

  return <div className={classNames}></div>;
}

HeaderSidepanelBackdrop.propTypes = {};

export default HeaderSidepanelBackdrop;
