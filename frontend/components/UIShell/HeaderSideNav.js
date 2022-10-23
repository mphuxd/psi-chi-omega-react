import { useContext } from "react";
import { navContext } from "../../context/navContext";
import cx from "classnames";
import PropTypes from "prop-types";
import HeaderSideNavGroup from "./HeaderSideNavGroup";
import Link from "next/link";

export const HeaderSideNav = ({ isActive }) => {
  let display = isActive ? " flex" : " hidden";
  let className = "flex-col z-10 absolute mt-24 ml-2";
  let classNames = cx(className, display);
  let navData = useContext(navContext);

  return (
    <ul id='mobile-header-menu' className={classNames}>
      {navData.map((group, index) => {
        return (
          <HeaderSideNavGroup name={group.groupName} key={index}>
            {group.links.map((link, index) => {
              return (
                <li key={index}>
                  <Link legacyBehavior={false} className='w-fit' href={link.href} key={index}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </HeaderSideNavGroup>
        );
      })}
    </ul>
  );
};

HeaderSideNav.propTypes = {
  isActive: PropTypes.bool,
};

export default HeaderSideNav;
