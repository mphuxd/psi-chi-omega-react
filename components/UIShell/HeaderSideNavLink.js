import React from "react";

const HeaderSideNavLink = ({navLink, step}) => {
  return <div key={step}>{navLink}</div>;
};

export default HeaderSideNavLink;
