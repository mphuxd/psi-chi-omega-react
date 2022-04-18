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
  let navGroup = navData.map((group, index) => {
    return (
      <HeaderSideNavGroup name={group.groupName} key={index}>
        {group.links.map((link, index) => {
          return (
            <Link className='w-fit' href={link.href} key={index}>
              <a className="w-fit">{link.name}</a>
            </Link>
          );
        })}
      </HeaderSideNavGroup>
    );
  });

  return <div className={classNames}>{navGroup}</div>;
};

HeaderSideNav.propTypes = {
  isActive: PropTypes.bool,
};

export default HeaderSideNav;
