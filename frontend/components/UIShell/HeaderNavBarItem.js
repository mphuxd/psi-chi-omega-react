import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export const HeaderNavBarItem = ({ name, tag, children }) => {
  const router = useRouter();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const displayDropdown = isOpenDropdown ? 'flex' : 'hidden';

  const listClassNames = cx('header-navbar__list', displayDropdown);
  const itemClassNames = cx('header-navbar-item', {
    'header-menu__divider': router.pathname.includes(tag),
  });

  const handleSetIsOpenDropdownClick = () => setIsOpenDropdown((isOpenDropdown = !isOpenDropdown));

  const handleSetIsOpenDropdownBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpenDropdown((isOpenDropdown = false));
    }
  };

  const listID = name.replaceAll(' ', '-');

  return (
    <li className='relative'>
      <button
        onClick={handleSetIsOpenDropdownClick}
        onBlur={handleSetIsOpenDropdownBlur}
        tabIndex='0'
        className={itemClassNames}
        aria-expanded={isOpenDropdown}
        aria-controls={listID}
      >
        <span className='uppercase'>{name}</span>
        <ul role='menu' id={listID} className={listClassNames}>
          {children}
        </ul>
      </button>
    </li>
  );
};

HeaderNavBarItem.propTypes = {
  navItem: PropTypes.object,
  step: PropTypes.number,
};

export default HeaderNavBarItem;
