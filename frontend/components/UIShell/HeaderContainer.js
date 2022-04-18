import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

const HeaderContainer = ({ isSideNavExpanded, render: Children }) => {
  const [isSideNavExpandedState, setIsSideNavExpandedState] = useState(isSideNavExpanded);

  const handleHeaderMenuButtonClick = useCallback(() => {
    setIsSideNavExpandedState((prevIsSideNavExpanded) => !prevIsSideNavExpanded);
  }, [setIsSideNavExpandedState]);

  return (
 
      <Children
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
