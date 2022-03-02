import React, { useState } from "react";
import LinkNav from "../Link/LinkNavGroup";
import cx from "classnames";
import PropTypes from "prop-types";
import { useRouter } from 'next/router'

export const HeaderMenuDropdown = ({ navItem, step }) => {
  let [isOpenDropdown, setIsOpenDropdown] = useState(false);
  let [isActiveLink, setIsActiveLink] = useState(false);
  let displayDropdown = isOpenDropdown ? "flex" : "hidden";
  let classNames = cx(" flex-col absolute top-[100%] left-[50%] -translate-x-1/2 px-4 pt-4 bg-white pb-2 text-tiny whitespace-nowrap drop-shadow-lg rounded-xl 2xl:p-4", displayDropdown);

  const handleSetIsOpenDropdownClick = () => setIsOpenDropdown((isOpenDropdown = !isOpenDropdown));

  const handleSetIsOpenDropdownBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpenDropdown((isOpenDropdown = false));
    }
  };

  const router = useRouter();
  const handleSetIsActiveLink = () => {
    console.log(router.asPath); //to-do
  }

  return (
    <div
      onLoad={handleSetIsActiveLink}
      onClick={handleSetIsOpenDropdownClick}
      onBlur={handleSetIsOpenDropdownBlur}
      key={step}
      tabIndex='0'
      className='header-menu--dropdown hover:header-menu--divider focus:header-menu--divider z-10'
    >
      <span className="uppercase">{navItem.link}</span>
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
