import React from 'react';
import PropTypes from 'prop-types';
import FaqFilterDesktop from './FaqFilterDesktop';
import FaqFilterMobile from './FaqFilterMobile';
import FaqFilterMobileListItem from './FaqFilterMobileListItem';
import FaqFilterDesktopListItem from './FaqFilterDesktopListItem';
import FaqFilterMobileList from './FaqFilterMobileList';

function FaqFilter({ list, onClick, isActive }) {
  const mobileList = list.map((item, index) => {
    return (
      <FaqFilterMobileListItem label={item} key={index} onClick={onClick} activeFilter={isActive} />
    );
  });
  const desktopList = list.map((item, index) => {
    return (
      <FaqFilterDesktopListItem
        label={item}
        key={index}
        onClick={onClick}
        activeFilter={isActive}
      />
    );
  });

  return (
    <aside aria-controls='faq-list' id='filter' className='col-span-full lg:col-span-3'>
      <FaqFilterMobile
        filterList={<FaqFilterMobileList activeFilter={isActive}>{mobileList}</FaqFilterMobileList>}
      />
      <FaqFilterDesktop activeFilter={isActive} filterList={desktopList} />
    </aside>
  );
}

FaqFilter.propTypes = {};

export default FaqFilter;
