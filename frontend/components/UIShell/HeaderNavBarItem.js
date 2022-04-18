import React, { useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

export const HeaderNavBarItem = ({ name, tag, children }) => {
  const router = useRouter();
  let [isOpenDropdown, setIsOpenDropdown] = useState(false);
  let displayDropdown = isOpenDropdown ? "flex" : "hidden";

  let listClassNames = cx("header-navbar__list", displayDropdown);
  let itemClassNames = cx("header-navbar-item", {
    "header-menu__divider": router.pathname.includes(tag),
  });

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
      tabIndex='0'
      className={itemClassNames}
    >
      <span className='uppercase'>{name}</span>
      <div className={listClassNames}>{children}</div>
    </div>
  );
};

HeaderNavBarItem.propTypes = {
  navItem: PropTypes.object,
  step: PropTypes.number,
};

export default HeaderNavBarItem;
