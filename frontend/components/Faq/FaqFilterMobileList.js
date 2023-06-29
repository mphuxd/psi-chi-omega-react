import React from 'react';
import PropTypes from 'prop-types';

function FaqFilterMobileList({ children, activeFilter }) {
  return (
    <div
      aria-labelledby='mobile-filter-title'
      role='listbox'
      tabIndex={0}
      aria-activedescendant={'mobile-filter-' + activeFilter.split(' ').join('-').toLowerCase()}
      className='flex flex-wrap gap-y-2'
    >
      {children}
    </div>
  );
}

FaqFilterMobileList.propTypes = {};

export default FaqFilterMobileList;
