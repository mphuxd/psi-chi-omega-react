import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import cx from "classnames";

function FaqFilterMobileListItem({ onClick, label, type, category }) {
  let className = cx({
    ["mobile-list-item--active underline"]: category === type,
    ["mobile-list-item basis-1/2 sm:basis-1/4 shrink hover:cursor-pointer"]: true,
  });

  function handleClick() {
    onClick(type);
  }

  return (
    <span onClick={handleClick} className={className}>
      {label}
    </span>
  );
}

FaqFilterMobileListItem.propTypes = {};

export default FaqFilterMobileListItem;
