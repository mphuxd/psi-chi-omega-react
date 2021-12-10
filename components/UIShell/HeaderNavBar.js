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
