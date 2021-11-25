import React from "react";
import HeaderContainer from "./UIShell/HeaderContainer";
import Header from "./UIShell/Header";
import HeaderName from "./UIShell/HeaderName";
import HeaderMenuButton from "./UIShell/HeaderMenuButton";
import HeaderNavBar from "./UIShell/HeaderNavBar";
import HeaderSidepanel from "./UIShell/HeaderSidepanel";
import HeaderSideNav from "./UIShell/HeaderSideNav";

export const DefaultHeader = () => (
  //DefaultHeader returns HeaderContainer returns Header & children
  <HeaderContainer
    render={(
      { isSideNavExpanded, onClickSideNavExpand, navData } 
      //props are exposed to defaultheader and can be used below
    ) => (
      <Header className='w-screen h-16 flex flex-row flex-wrap justify-between content-center static md:h-20 2xl:pl-28 2xl:pr-28'>
        <HeaderName></HeaderName>
        <HeaderMenuButton onClick={onClickSideNavExpand} isActive={isSideNavExpanded} />
        <HeaderNavBar navData={navData} />
        <HeaderSidepanel
          navData={navData}
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}>
            <HeaderSideNav navData={navData} isActive={isSideNavExpanded} />
        </HeaderSidepanel>
      </Header>
    )}
  />
);

export default DefaultHeader;
