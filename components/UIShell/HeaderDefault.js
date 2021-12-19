import HeaderContainer from "./HeaderContainer";
import Header from "./Header";
import HeaderName from "./HeaderName";
import HeaderMenuButton from "./HeaderMenuButton";
import HeaderNavBar from "./HeaderNavBar";
import HeaderSidepanel from "./HeaderSidepanel";
import HeaderSideNav from "./HeaderSideNav";

export const HeaderDefault = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      //render prop exposes props to be used below
      <Header isActive={isSideNavExpanded}>
        <HeaderName isActive={isSideNavExpanded}></HeaderName>
        <HeaderMenuButton onClick={onClickSideNavExpand} isActive={isSideNavExpanded} />
        <HeaderNavBar />
        <HeaderSidepanel callBack={onClickSideNavExpand} isActive={isSideNavExpanded}>
          <HeaderSideNav isActive={isSideNavExpanded} />
        </HeaderSidepanel>
      </Header>
    )}
  />
);

export default HeaderDefault;
