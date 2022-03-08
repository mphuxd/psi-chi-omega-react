import { HeaderMenuDropdown } from "./HeaderMenuDropdown";
import { navContext } from "../../context/nav-context";
import { useContext } from "react";


export const HeaderNavBar = () => {
  let navData = useContext(navContext);
  return (
    <nav className='hidden md:flex md:flex-row md:justify-between'>
    
      {navData.map((navItem, step) => {
        return <HeaderMenuDropdown navItem={navItem} key={step} />;
      })}
    </nav>
  );
};

export default HeaderNavBar;

// active link
//navbar holds active link state, passes current activelink to children
//children checks if its active link, if so, apply css property, else default
//updating state...
//read beta docs
//state change -> re-render
//state depends on router as
