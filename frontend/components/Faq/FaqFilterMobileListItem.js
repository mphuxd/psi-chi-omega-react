import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function FaqFilterMobileListItem({ onClick, label, activeFilter }) {
  let className = cx({
    ['underline']: label === activeFilter,
    ['basis-1/2 sm:basis-1/4 shrink hover:cursor-pointer text-left']: true,
  });

  function handleClick() {
    onClick(label);
  }

  return (
    <button
      id={'mobile-filter-' + label.split(' ').join('-').toLowerCase()}
      role='option'
      aria-selected={label === activeFilter ? true : false}
      onClick={handleClick}
      className={className}
    >
      {label}
    </button>
  );
}

FaqFilterMobileListItem.propTypes = {};

export default FaqFilterMobileListItem;
