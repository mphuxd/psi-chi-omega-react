import { navContext } from "../../context/nav-context";
import { useContext } from "react";
import cx from "classnames";
import HeaderSideNavGroup from "./HeaderSideNavGroup";
import PropTypes from "prop-types";

export const HeaderSideNav = ({ isActive }) => {
  let display = isActive ? " flex" : " hidden";
  let className = "flex-col z-10  absolute mt-24 ml-2";
  let classNames = cx(className, display);
  let navData = useContext(navContext);
  return (
    <div className={classNames}>
      {navData.map((navItem, step) => {
        return <HeaderSideNavGroup navItem={navItem} key={step} />;
      })}
    </div>
  );
};

HeaderSideNav.propTypes = {
  isActive: PropTypes.bool,
};

export default HeaderSideNav;
