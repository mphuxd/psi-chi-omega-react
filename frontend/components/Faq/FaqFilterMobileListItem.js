import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

function FaqFilterMobileListItem({ onClick, label, activeFilter }) {
  let className = cx({
    ["underline"]: label === activeFilter,
    ["basis-1/2 sm:basis-1/4 shrink hover:cursor-pointer"]: true,
  });

  function handleClick() {
    onClick(label);
  }

  return (
    <span onClick={handleClick} className={className}>
      {label}
    </span>
  );
}

FaqFilterMobileListItem.propTypes = {};

export default FaqFilterMobileListItem;
