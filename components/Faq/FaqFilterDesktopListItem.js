import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { useState } from "react";

function FaqFilterDesktopListItem({ onClick, label, type, category }) {
  let className = cx({
    ["w-fit hover:cursor-pointer "]:true,
    ["underline"]: type === category,
  });

  function handleClick(event) {
    onClick(type);
  }

  return (
    <span onClick={handleClick} className={className}>
      {label}
    </span>
  );
}

FaqFilterDesktopListItem.propTypes = {};

export default FaqFilterDesktopListItem;

// how do i toggle active when user clicks on another button?
//state must be lifted and should not be here
//if activecategoryprop matches item-tag then set as active
