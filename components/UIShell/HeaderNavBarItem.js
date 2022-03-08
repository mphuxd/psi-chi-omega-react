import React, { useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

export const HeaderNavBarItem = ({ itemName, itemTag, children }) => {
  const router = useRouter();
  let [isOpenDropdown, setIsOpenDropdown] = useState(false);
  let displayDropdown = isOpenDropdown ? "flex" : "hidden";

  let listClassNames = cx("header-navbarlist", displayDropdown);
  let itemClassNames = cx("header-navbaritem", {
    "header-menu--divider": router.pathname.includes(itemTag),
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
      <span className='uppercase'>{itemName}</span>
      <div className={listClassNames}>{children}</div>
    </div>
  );
};

HeaderNavBarItem.propTypes = {
  navItem: PropTypes.object,
  step: PropTypes.number,
};

export default HeaderNavBarItem;
