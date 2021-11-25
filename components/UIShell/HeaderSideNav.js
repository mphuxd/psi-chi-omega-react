import { Children } from "react";
import HeaderSideNavGroup from "./HeaderSideNavGroup";

//auto generate
export const HeaderSideNav = ({ navData, isActive }) => {
  let className ="flex-col" + ' z-10' + ' absolute' + ' mt-24' + ' ml-2';
  let display = isActive ? " flex" : " hidden";
  className = className + display;
  return (
    //for each prop create an item
    <div className={className}>
      {navData.map((navItem, step) => {
        //for each navdata item create a dropdown and passdown navitem as a prop
        return <HeaderSideNavGroup navItem={navItem} key={step} />;
      })}
    </div>
  );
};

export default HeaderSideNav;
