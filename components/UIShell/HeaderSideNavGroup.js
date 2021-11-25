import React from "react";
import HeaderSideNavLink from "./HeaderSideNavLink";

const HeaderSideNavGroup = ({ navItem, step}) => {
  return (
    <div key={step} className={"flex flex-col"}>
      <div className={"font-semibold text-base "}>{navItem.link}</div>
      <div>
        {navItem.sublinks.map((navLink, step) => {
          return <HeaderSideNavLink navLink={navLink} key={step} />;
        })}
      </div>
    </div>
  );
};

export default HeaderSideNavGroup;
