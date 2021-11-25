import React, { useState } from "react";
import HeaderNavItem from "./HeaderNavItem";

export const HeaderMenuDropdown = ({ navItem, step}) => {
  //
  let [isOpenDropdown, setIsOpenDropdown] = useState(false);
  let displayDropdown = isOpenDropdown ? " flex" : " hidden";
  let classNames = "flex-col";
  classNames = classNames + displayDropdown;

  return (
    <div key={step} className='mt-auto mb-auto'>
      {navItem.link}
      <div className={classNames}>
        {navItem.sublinks.map((navLink, step) => {
          return <HeaderNavItem navLink={navLink} key={step} />;
        })}
      </div>
    </div>
  );
};

export default HeaderMenuDropdown;
