import React, { useState } from "react";
import LinkNav from "../Link/LinkNavGroup";
import cx from "classnames";
import PropTypes from "prop-types";

export const HeaderMenuDropdown = ({ navItem, step }) => {
  let [isOpenDropdown, setIsOpenDropdown] = useState(false);
  let displayDropdown = isOpenDropdown ? "flex" : "hidden";
  let classNames = cx(" flex-col absolute mt-1 bg-white pb-1 pr-1", displayDropdown);

  const handleSetIsOpenDropdownClick = () => setIsOpenDropdown((isOpenDropdown = !isOpenDropdown));

  const handleSetIsOpenDropdownBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpenDropdown((isOpenDropdown = false));
    }
  };

  return (
    <div
      onClick={handleSetIsOpenDropdownClick}
      onBlur={handleSetIsOpenDropdownBlur}
      key={step}
      tabIndex='0'
      className='header-menu--dropdown'
    >
      {navItem.link}
      <div className={classNames}>
        {navItem.sublinks.map((navLink, step) => {
          return <LinkNav key={step} navItem={navItem} navLink={navLink} />;
        })}
      </div>
    </div>
  );
};

HeaderMenuDropdown.propTypes = {
  navItem: PropTypes.object,
  step: PropTypes.number,
};

export default HeaderMenuDropdown;
