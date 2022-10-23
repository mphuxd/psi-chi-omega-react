import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import useBreakpointSize from "@/hooks/useBreakpointSize";

const HeaderContainer = ({ isSideNavExpanded, isMobile, render: Children }) => {
  const [isSideNavExpandedState, setIsSideNavExpandedState] = useState(isSideNavExpanded);

  const handleHeaderMenuButtonClick = useCallback(() => {
    setIsSideNavExpandedState((prevIsSideNavExpanded) => !prevIsSideNavExpanded);
  }, [setIsSideNavExpandedState]);

  const [isMobileState, setIsMobileState] = useState(isMobile);
  const breakpoint = useBreakpointSize();

  useEffect(() => {
    const mobileBreakpoints = ["default", "sm"];
    mobileBreakpoints.includes(breakpoint) ? setIsMobileState(true) : setIsMobileState(false);
  }, [breakpoint]);

  return (
    <Children
      isMobile={isMobileState}
      isSideNavExpanded={isSideNavExpandedState}
      onClickSideNavExpand={handleHeaderMenuButtonClick}
    />
  );
};

HeaderContainer.propTypes = {
  isSideNavExpanded: PropTypes.bool,
};

HeaderContainer.defaultProps = {
  isSideNavExpanded: false,
};

export default HeaderContainer;
