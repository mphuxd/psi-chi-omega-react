import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

function FaqFilterDesktopListItem({ onClick, label, activeFilter }) {
  let className = cx({
    ["w-fit hover:cursor-pointer "]: true,
    ["underline"]: label === activeFilter,
  });

  function handleClick() {
    onClick(label);
  }

  return (
    <button onClick={handleClick} className={className}>
      {label}
    </button>
  );
}

FaqFilterDesktopListItem.propTypes = {};

export default FaqFilterDesktopListItem;
