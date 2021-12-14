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
      <Header
        isActive={isSideNavExpanded}
        className='w-screen h-16 flex flex-row flex-wrap justify-between content-center static z-50 md:h-20 theme--default-layout'
      >
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
