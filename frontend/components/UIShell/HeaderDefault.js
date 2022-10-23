import HeaderContainer from "./HeaderContainer";
import Header from "./Header";
import HeaderName from "./HeaderName";
import HeaderMenuButton from "./HeaderMenuButton";
import HeaderNavBar from "./HeaderNavBar";
import HeaderSidepanel from "./HeaderSidepanel";
import HeaderSideNav from "./HeaderSideNav";
import HeaderSidepanelBackdrop from "./HeaderSidepanelBackdrop";

export const HeaderDefault = () => (
  <HeaderContainer
    render={({ isMobile, isSideNavExpanded, onClickSideNavExpand }) => (
      //render prop exposes props to be used below
      <Header isActive={isSideNavExpanded}>
        <HeaderName isActive={isSideNavExpanded} />
        <HeaderMenuButton
          isMobile={isMobile}
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderNavBar isMobile={isMobile} />
        <HeaderSidepanel
          isMobile={isMobile}
          callBack={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        >
          <HeaderSideNav isActive={isSideNavExpanded} />
        </HeaderSidepanel>
        <HeaderSidepanelBackdrop onClick={onClickSideNavExpand} isActive={isSideNavExpanded} />
      </Header>
    )}
  />
);

export default HeaderDefault;
