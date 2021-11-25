import React, { useState, useCallback } from "react";

const HeaderContainer = ({ isSideNavExpanded, navData, render: Children }) => {
  //define state and props here to pass to children
  //state for expandable sidenav

  const [isSideNavExpandedState, setIsSideNavExpandedState] = useState(isSideNavExpanded);

  const handleHeaderMenuButtonClick = useCallback(() => {
    setIsSideNavExpandedState((prevIsSideNavExpanded) => !prevIsSideNavExpanded);
  }, [setIsSideNavExpandedState]);

  return (
    <Children
      isSideNavExpanded={isSideNavExpandedState}
      onClickSideNavExpand={handleHeaderMenuButtonClick}
      navData={navData}
    />
  );
};

HeaderContainer.defaultProps = {
  isSideNavExpanded: false,
  navData: [
    {
      link: "About Us",
      sublinks: ["Little Sister Program", "History", "Community Involvement"],
    },
    {
      link: "Members",
      sublinks: ["Brothers", "Alumni"],
    },
    {
      link: "Resources",
      sublinks: ["COVID-19", "FAQ", "Mental Health", "Contact Us"],
    },
    {
      link: "Join",
      sublinks: ["Psi Chi Omega Fraternity", "Psi Chi Omega Little Sis"],
    },
  ],
};

export default HeaderContainer;
